require('dotenv').config()

// Variables
const CLIENT_NAME = process.env.ALGOLIA_CLIENT_NAME || 'Algolia'
const APP_PASSWORD = process.env.APP_PASSWORD || null
const APP_ID = process.env.ALGOLIA_APP_ID || null
const INDEX_NAME = process.env.ALGOLIA_INDEX_NAME || null
const API_KEY = process.env.ALGOLIA_API_KEY || null
const PID = process.env.ALGOLIA_PID || null

let client,
    index,
    appId = APP_ID || localStorage.getItem('appId') || '',
    indexName = INDEX_NAME || localStorage.getItem('indexName') || '',
    apiKey = API_KEY || localStorage.getItem('apiKey') || '',
    pid = PID || localStorage.getItem('pid') || '',
    query = ''

document.title = `${CLIENT_NAME} Rules Checker`
document.getElementById('client-name').textContent = CLIENT_NAME

// Password protection
if (APP_PASSWORD) {
  let password = localStorage.getItem('algolia-rules-checker-pass') || null
  while (password !== APP_PASSWORD) password = prompt('Enter password:')
  localStorage.setItem('algolia-rules-checker-pass', password)
}

document.body.style.display = 'block'

import algoliasearch from 'algoliasearch'
import 'regenerator-runtime/runtime'
import './styles.css'

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
    const response = await index.search(query, { getRankingInfo: true })
    if (!response) throw new Error('No response')

    const { appliedRules } = response

    if (!appliedRules || appliedRules.length === 0) return []

    const hits = await Promise.all(appliedRules.map(async ({ objectID }) => {
      try {
        return await index.getRule(objectID)
      } catch (e) {
        return { objectID, _error: true }
      }
    }))

    return hits
      .map(({
        objectID: id,
        description = '',
        enabled = false,
        tags = [],
        _error = false,
        _metadata = { lastUpdate: null },
      }) => ({
        id,
        enabled: enabled ? '🟢' : '🔵',
        editor: tags?.includes('visual-editor') ? 'visual' : 'manual',
        description: description,
        lastUpdate: _metadata.lastUpdate ? new Date(_metadata.lastUpdate * 1000).toLocaleString() : '',
        _error,
      }))
    .sort((a, b) => b.lastUpdate - a.lastUpdate)
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
  console.log(e)
  query = _query

  // Fetch rules
  const rules = await fetchRules(query)

  // Link to dashboard
  link.innerHTML = `<a href="${getSearchUrl(query)}" target="_blank">See this search in your dashboard</a>`

  // No rules
  if (rules.length === 0) {
    message.innerHTML = `<p class="text-danger mb-2">No rules are applying to the query "${query}"</p>`
    results.innerHTML = ''
    return
  }
  // Rules
  message.innerHTML = `
    <p class="text-success mb-2">${rules.length} rule${rules.length > 1 ? 's are' : ' is'} applying to the query "${query}"</p>
  `
  results.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Rule ID</th>
          <th scope="col">Enabled</th>
          <th scope="col">Type</th>
          <th scope="col">Description</th>
          <th scope="col">Last update</th>
        </tr>
      </thead>
      <tbody>
        ${rules.map(
          ({ id, enabled, editor, description, lastUpdate, _error }) => _error ? `
            <tr>
              <td><a class="is-disabled">${id}</a></td>
              <td>🔴</td>
              <td></td>
              <td class="text-danger" style="max-width: 300px">ERROR: This rule doesn't exist!</td>
              <td><a href="https://support.algolia.com/requests/new" class="btn btn-sm btn-warning" target="_blank">Get support</a></td>
            </tr>
          ` : `
            <tr ${enabled ? '' : 'class="opacity-50"'}>
              <td><a href="${getRuleUrl(id, editor)}" target="_blank">${id}</a></td>
              <td>${enabled}</td>
              <td>${`${editor[0].toUpperCase()}${editor.slice(1)}`}</td>
              <td style="max-width: 300px">${description}</td>
              <td>${lastUpdate}</td>
            </tr>
          `
        ).join('')}
      </tbody>
    </table>
  `
})
