require('dotenv').config()

const CLIENT_NAME = process.env.ALGOLIA_CLIENT_NAME || 'Algolia'
const APP_PASSWORD = process.env.APP_PASSWORD || ''
const APP_ID = process.env.ALGOLIA_APP_ID || ''
const INDEX_NAME = process.env.ALGOLIA_INDEX_NAME || ''
const API_KEY = process.env.ALGOLIA_API_KEY || ''

document.title = `${CLIENT_NAME} Rules Checker`
document.getElementById('client-name').textContent = CLIENT_NAME

let password = localStorage.getItem('algolia-rules-checker-pass') || ''

while (password !== APP_PASSWORD) {
  password = prompt('Enter the password:')
}

localStorage.setItem('algolia-rules-checker-pass', password)

document.body.style.display = 'block'

import algoliasearch from 'algoliasearch'
import 'regenerator-runtime/runtime'
import './styles.css'

// Variables
let client,
    index,
    appId = APP_ID,
    indexName = INDEX_NAME,
    apiKey = API_KEY,
    query = ''

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
const queryInput = document.getElementById('query')

// Functions
const fetchRules = async query => {
  try {
    const { hits, nbHits } = await index.searchRules(query)

    if (nbHits === 0) return []

    return hits.map(({ description, objectID: id, tags }) => ({
      id,
      editor: tags?.includes('visual-editor') ? 'visual' : 'manual',
      description: description ?? '',
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

const getSearchUrl = query => `https://www.algolia.com/apps/${appId}/explorer/browse/${indexName}?query=${query}&searchMode=search`

const getRuleUrl = (id, editor) => `https://www.algolia.com/apps/${appId}/rules/${indexName}/${editor}-editor/edit/${id}`

// Search
form.addEventListener('submit', async e => {
  e.preventDefault()
  
  const _appId = appIdInput.value.trim()
  const _indexName = indexNameInput.value.trim()
  const _apiKey = apiKeyInput.value.trim()
  const _query = queryInput.value.trim()

  client = algoliasearch(_appId, _apiKey)
  index = client.initIndex(_indexName)

  if (_query.toLowerCase() === query.toLowerCase() && _appId === appId && _indexName === indexName && _apiKey === apiKey) return
  query = _query

  // Fetch rules
  const rules = await fetchRules(query)

  // Link to dashboard
  link.innerHTML = `<a href="${getSearchUrl(query)}" target="_blank">See this search in your dashboard</a>`

  // No rules
  if (rules.length === 0) {
    message.innerHTML = `<p class="text-danger mb-2">No rules are matching this query "${query}"</p>`
    results.innerHTML = ''
    return
  }
  // Rules
  message.innerHTML = `
    <p class="text-success mb-2">${rules.length} rule${rules.length > 1 ? 's are' : ' is'} matching the query "${query}"</p>
  `
  results.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Rule ID</th>
          <th scope="col">Type</th>
          <th scope="col">Description</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        ${rules.map(
          ({ id, editor, description }) => `
            <tr>
              <td>${id}</td>
              <td>${`${editor[0].toUpperCase()}${editor.slice(1)}`}
              <td>${description}</td>
              <td><a href="${getRuleUrl(id, editor)}" target="_blank">Link to rule</a></td>
            </tr>
          `
        ).join('')}
      </tbody>
    </table>
  `
})
