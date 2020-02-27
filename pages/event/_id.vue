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
    const path = location.pathname
    // "/event"の下の階層を取得する正規表現
    const eventIdPathArray = path.match(/[^/event/]+/)
    const eventId = eventIdPathArray ? eventIdPathArray[0] : null
    const searchResult = await index.getObjects([eventId])
    const denseResult = searchResult.results.filter((e) => e)
    const existsEvent = !!denseResult.length
    return existsEvent
  }
}
</script>
