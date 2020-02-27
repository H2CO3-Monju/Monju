<template>
  <h1>test</h1>
</template>

<script>
import * as algoliasearch from 'algoliasearch'
const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_ONLY_API_KEY
)
const index = client.initIndex('Monju')
export default {
  async validate({ params }) {
    const searchResult = await index.search({ query: '' })
    console.log(searchResult.hits)
    // 数値でなければならない
    return !!searchResult.hits
  },
  async mounted() {
    const searchResult = await index.search({})
    console.log(searchResult.hits)
  }
}
</script>
