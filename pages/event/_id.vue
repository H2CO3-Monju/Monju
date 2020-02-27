<template>
  <h1>test</h1>
</template>

<script>
// firebaseの場合
import firebase from '~/plugins/firebase'
const eventRef = firebase.firestore().collection('study_group_id')
const confirmEventId = (studyGroupIdRef) => {
  return new Promise((resolve) => {
    studyGroupIdRef
      .get()
      .then((doc) => {
        if (doc.exists) resolve(true)
        else resolve(false)
      })
      .catch((error) => {
        console.log('Error getting document:', error)
        resolve(false)
      })
  })
}
// algoliaを使う場合
/* import * as algoliasearch from 'algoliasearch'
  const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_ONLY_API_KEY
)
const index = client.initIndex('Monju') */
export default {
  async validate({ params }) {
    const eventId = params.id
    // firebaseの場合
    const studyGroupIdRef = eventRef.doc(eventId)
    const existsEvent = await confirmEventId(studyGroupIdRef)
    return existsEvent
    // algoliaで検索する場合
    /* const searchResult = await index.getObjects([eventId])
    const denseResult = searchResult.results.filter((e) => e)
    const existsEvent = !!denseResult.length
    return existsEvent */
  }
}
</script>
