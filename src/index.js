import algoliasearch from 'algoliasearch'
import 'regenerator-runtime/runtime'
import './styles.css'

// Variables
let client,
    index,
    appId = localStorage.getItem('appId') || '',
    indexName = localStorage.getItem('indexName') || '',
    apiKey = localStorage.getItem('apiKey') || '',
    pid = localStorage.getItem('pid') || '',
    query = ''
    
if (appId && indexName && apiKey) {
  client = algoliasearch(appId, apiKey)
  index = client.initIndex(indexName)
}

// Elements
const form = document.getElementById('search-form')
const message = document.getElementById('search-message')
const link = document.getElementById('search-link')
const results = document.getElementById('search-results')

const appIdInput = document.getElementById('app_id')
appIdInput.value = appId
const indexNameInput = document.getElementById('index_name')
indexNameInput.value = indexName
const apiKeyInput = document.getElementById('api_key')
apiKeyInput.value = apiKey
const pidInput = document.getElementById('pid')
pidInput.value = pid
const queryInput = document.getElementById('query')

// Functions
const fetchRules = async query => {
  try {
    const { hits, nbHits } = await index.searchRules(query)

    if (nbHits === 0) return []

    return hits
      .sort((a, b) => b._metadata.lastUpdate - a._metadata.lastUpdate)
      .map(({ description, enabled, objectID: id, tags, _metadata: { lastUpdate } }) => ({
        id,
        enabled: enabled ? '✅' : '❌',
        editor: tags?.includes('visual-editor') ? 'visual' : 'manual',
        description: description ?? '',
        lastUpdate: new Date(lastUpdate * 1000).toLocaleString(),
      }))
  } catch (e) {
    message.innerHTML = `
      <p class="text-danger fb-4">
        Your search returned an error 😓<br> 
        Please check your application details and try again.
      </p>
    `
    link.innerHTML = ''
    results.innerHTML = ''

    throw e
  }
}

const getSearchUrl = query => {
  const pidParam = pid ? `&_pid=${pid}` : ''
  return `https://www.algolia.com/apps/${appId}/explorer/browse/${indexName}?query=${query}&searchMode=search${pidParam}`
}

const getRuleUrl = (id, editor) => {
  const pidParam = pid ? `?_pid=${pid}` : ''
  return `https://www.algolia.com/apps/${appId}/rules/${indexName}/${editor}-editor/edit/${id}${pidParam}`
}

// Search
form.addEventListener('submit', async e => {
  e.preventDefault()
  
  const _appId = appIdInput.value.trim()
  const _indexName = indexNameInput.value.trim()
  const _apiKey = apiKeyInput.value.trim()
  const _pid = pidInput.value.trim()
  const _query = queryInput.value.trim()

  if (_appId !== appId || _indexName !== indexName || _apiKey !== apiKey) {
    client = algoliasearch(_appId, _apiKey)
    index = client.initIndex(_indexName)
    appId = _appId
    localStorage.setItem('appId', appId)
    indexName = _indexName
    localStorage.setItem('indexName', indexName)
    apiKey = _apiKey
    localStorage.setItem('apiKey', apiKey)
  }
  pid = _pid
  localStorage.setItem('pid', pid)

  if (_query.toLowerCase() === query.toLowerCase() && _appId === appId && _indexName === indexName && _apiKey === apiKey) return
  query = _query

  // Fetch rules
  const rules = await fetchRules(query)

  // Link to dashboard
  link.innerHTML = `<a href="${getSearchUrl(query)}" target="_blank">See this search in your dashboard</a>`

  // No rules
  if (rules.length === 0) {
    message.innerHTML = `<p class="text-danger mb-2">No rules are matching to this query "${query}"</p>`
    results.innerHTML = ''
    return
  }
  // Rules
  message.innerHTML = `
    <p class="text-success mb-2">${rules.length} rule${rules.length > 1 ? 's are' : ' is'} matching to the query "${query}"</p>
  `
  results.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Rule ID</th>
          <th scope="col">Enabled</th>
          <th scope="col">Type</th>
          <th scope="col">Description</th>
          <th scope="col">Last updated</th>
        </tr>
      </thead>
      <tbody>
        ${rules.map(
          ({ id, enabled, editor, description, lastUpdate }) => `
            <tr>
              <td><a href="${getRuleUrl(id, editor)}" target="_blank">${id}</a></td>
              <td>${enabled}</td>
              <td>${`${editor[0].toUpperCase()}${editor.slice(1)}`}
              <td style="max-width: 300px">${description}</td>
              <td>${lastUpdate}</td>
            </tr>
          `
        ).join('')}
      </tbody>
    </table>
  `
})
