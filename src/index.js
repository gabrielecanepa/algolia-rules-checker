import algoliasearch from 'algoliasearch'
import './styles.css'

// TODO: CHANGE THE VALUES BELOW!
const APP_ID = '0UI9MOXMX5'
const API_KEY = '6d7a972cabfc4d14882292273dcef68e'
const INDEX = 'best_buy'

// Initialize the client
const client = algoliasearch(APP_ID, API_KEY)
const index = client.initIndex(INDEX)

// Functions
const fetchRules = async (query) => {
  try {
    const response = await index.searchRules(query)
    const { hits, nbHits } = response

    if (nbHits === 0) return []

    return hits.map(({ description, objectID: id, tags }) => ({
      id,
      editor: tags?.includes('visual-editor') ? 'visual' : 'manual',
      description: description ?? '',
    }))
  } catch {
    return []
  }
}

const getSearchUrl = (query) =>
  `https://www.algolia.com/apps/${APP_ID}/explorer/browse/${INDEX}?query=${query}&searchMode=search`

const getRuleUrl = (id, editor) =>
  `https://www.algolia.com/apps/${APP_ID}/rules/${INDEX}/${editor}-editor/edit/${id}`

// Search
const form = document.getElementById('search-form')
const message = document.getElementById('search-message')
const link = document.getElementById('search-link')
const results = document.getElementById('search-results')

let previousQuery = ''

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const query = e.target.querySelector('input').value.trim()

  // Check query
  if (!query) {
    message.innerHTML = '<p class="text-danger">Please specify a query</p>'
    link.innerHTML = ''
    results.innerHTML = ''
    return
  }
  if (query.toLowerCase() === previousQuery.toLowerCase()) return
  previousQuery = query

  // Fetch rules
  const rules = await fetchRules(query)

  // Link to dashboard
  link.innerHTML = `<a href="${getSearchUrl(
    query
  )}" target="_blank">See this search in the dashboard</a>`

  // No rules
  if (rules.length === 0) {
    message.innerHTML = `
      <p class="text-danger">No rules are applying with the query "${query}"</p>
    `
    results.innerHTML = ''
    return
  }
  // Rules
  message.innerHTML = `
    <p class="text-success">${rules.length} rule${
    rules.length > 1 ? 's are' : ' is'
  } applying with the query "${query}"</p>
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
            <td><a href="${getRuleUrl(
              id,
              editor
            )}" target="_blank">Link to rule</a></td>
          </tr>
        `
        )}
      </tbody>
    </table>
  `
})
