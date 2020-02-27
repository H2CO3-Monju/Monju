<template>
  <div class="bg">
    <v-container class="container">
      <v-row>
        <v-col>
          <v-row class="event-title">
            <h1 class="event-title__h1">
              {{ title }}
            </h1>
          </v-row>

          <v-row>
            <ul class="tags">
              <tag
                v-for="(tag, index) in tags"
                :shouldShowFontawesome="false"
                :value="tag"
                :key="index"
                class="tags__tag"
              />
            </ul>
          </v-row>

          <v-row class="event-info">
            <v-col class="event-info__left-column flex-grow-0">
              <div class="event-info__image-wrap">
                <img id="preview" class="event-info__image" />
              </div>
            </v-col>

            <v-col class="event-info__right-column">
              <v-row class="event-info__openDate">
                <p>
                  <span class="listMark"></span>
                  {{ openDate }}〜{{ closeTime }}（{{ allotedTime }}時間）
                </p>
              </v-row>
              <v-row class="event-info__deadlineDate">
                <p>
                  <span class="listMark--deadline"></span>
                  応募締め切り：{{ deadlineDate }}
                </p>
                <p v-if="autoCloseNumber !== 1" class="event-info__autoClose">
                  ※参加者が{{
                    autoCloseNumber
                  }}人に達さなかった場合はイベントを中止します。
                </p>
              </v-row>
              <v-row class="event-info__type">
                <p>
                  <span class="listMark"></span>
                  {{ type }}
                </p>
              </v-row>
              <v-row class="event-info__fixedMember">
                <p>
                  <span class="listMark"></span>
                  定員：0/{{ fixedMember }}人
                </p>
              </v-row>
              <v-row class="event-info__entryFee">
                <p>
                  <span class="listMark"></span>
                  <span v-if="!!entryFee">
                    費用：{{ entryFee }}
                    <i class="fab fa-product-hunt"></i>
                  </span>
                  <span v-else>費用: 無料</span>
                </p>
              </v-row>
              <v-row class="event-info__presenters">
                <p>
                  主催者：
                  <avatar :userName="owner" />
                </p>
              </v-row>
              <v-row class="event-info__presenters">
                <div class="d-flex">
                  <p style="width: 68px">発表者：</p>
                  <p class="d-flex flex-wrap flex-grow-1" style="flex: 1">
                    <template
                      :value="presenter"
                      v-for="(presenter, index) in presenters"
                    >
                      <span :key="index">
                        <avatar :userName="presenter.message" />
                        <!-- 最後の値以外は読点をつける -->
                        <span v-if="index !== presenters.length - 1">
                          、
                        </span>
                      </span>
                    </template>
                  </p>
                </div>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <div v-html="markdown" class="markdown"></div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// firebaseの場合
import firebase from '~/plugins/firebase'
import tag from '@/components/pages/event/new/tag'
import avatar from '@/components/ui/avatar'
// import buttonComponent from '@/components/ui/btns/buttonComponent'
const storageRef = firebase.storage().ref()
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
  },
  components: {
    tag,
    avatar
  },
  data() {
    return {
      eventId: '',
      allotedTime: '',
      autoCloseNumber: '',
      closeTime: '',
      deadlineDate: '',
      entryFee: '',
      fixedMember: '',
      markdown: '',
      openDate: '',
      owner: '',
      presenters: [],
      tags: [],
      title: '',
      type: ''
    }
  },
  mounted() {
    const path = location.pathname
    // "/event/"の下の階層を取得する正規表現
    // path.match(/(?<=^\/event\/{1}).+/) //肯定後読みを使うならこの書き方
    const eventIdPathArray = path.match(/^\/event\/.+/).map((s) => s.slice(7))
    this.eventId = eventIdPathArray ? eventIdPathArray[0] : null
    const studyGroupIdRef = eventRef.doc(this.eventId)
    studyGroupIdRef
      .get()
      .then((doc) => {
        this.allotedTime = doc.data().allotedTime
        this.autoCloseNumber = doc.data().autoCloseNumber
        this.closeTime = doc.data().closeTime
        this.deadlineDate = doc.data().deadlineDate
        this.entryFee = doc.data().entryFee
        this.extension = doc.data().extension
        this.fixedMember = doc.data().fixedMember
        this.markdown = doc.data().markdown
        this.openDate = doc.data().openDate
        this.owner = doc.data().owner
        this.presenters = doc.data().presenters
        this.tags = doc.data().tags
        this.title = doc.data().title
        this.type = doc.data().type
        const storageEventIdRef = storageRef.child(
          `event/${this.eventId}.${this.extension}`
        )
        storageEventIdRef.getDownloadURL().then((url) => {
          document.getElementById('preview').src = url
        })
      })
      .catch((error) => {
        console.log('Error getting document:', error)
      })
  }
}
</script>

<style lang="scss" scoped>
$markdown-font-color: #444;
$border-color: $_keyRimePie;
$table-border-color: #606060;
$th-bg-color: $_keyRimePie;
$td-bg-color: #fefff2;
$code-font-color: #2257ca;
$code-bg-color: #e8f0f7;
$pre-bg-color: #f5f5f5;
$deadline-color: #7da3a1;
ul {
  padding: 0;
}
.bg {
  background-color: $_bg_color;
}
@media screen and (max-width: 600px) {
  .container {
    width: 95%;
    padding: 50px 5vw;
  }
  .bg {
    padding: 1vh 0;
  }
}
@media screen and (min-width: 600px) {
  .container {
    width: 70%;
    padding: 50px 60px;
  }
  .bg {
    padding: 5vh 0;
  }
}
.container {
  height: auto;
  margin: 0 auto;
  border-radius: 20px;
  color: $_font_color;
  background-color: $_container_white;
  .event-title {
    margin-bottom: 12px;
    color: $_font_color;
    border-bottom: solid 4px $border-color;
    &__h1 {
      width: 100%;
      font-size: 1.8em;
      font-weight: bold;
      word-wrap: break-word;
    }
  }
  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0 2px;
    &__tag {
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 0 8px;
      border: solid 1px $_font_color;
      border-radius: 3px;
      font-size: 0.8em;
    }
  }
  .event-info {
    &__left-column {
      margin-right: 40px;
      width: 344px;
    }
    &__image-wrap {
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 320px;
      height: 213px;
    }
    &__image {
      cursor: pointer;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: auto;
      width: auto;
      max-width: 100%;
      max-height: 100%;
    }
    &__right-column {
      p {
        margin-bottom: 0;
      }
      %listMark {
        display: inline-block;
        width: 1em;
        height: 1em;
        background-color: $border-color;
        background-image: -webkit-gradient(
          linear,
          0 0,
          0 100%,
          color-stop(0.1, #fff),
          color-stop(0.2, transparent),
          color-stop(0.3, #fff),
          color-stop(0.4, transparent),
          color-stop(0.5, #fff),
          color-stop(0.6, transparent),
          color-stop(0.7, #fff),
          color-stop(0.8, transparent),
          color-stop(0.9, #fff),
          color-stop(1, transparent),
          to(transparent)
        );
      }
      .listMark {
        @extend %listMark;
        background-color: $border-color;
        &--deadline {
          @extend %listMark;
          background-color: $deadline-color;
        }
      }
    }
    &__deadlineDate {
      color: $deadline-color;
    }
    &__autoClose {
      padding-left: 1em;
    }
  }
}
</style>
<style lang="scss">
$markdown-font-color: #444;
$border-color: $_keyRimePie;
$table-border-color: #606060;
$th-bg-color: $_keyRimePie;
$td-bg-color: #fefff2;
$code-font-color: #2257ca;
$code-bg-color: #e8f0f7;
$pre-bg-color: #f5f5f5;
$deadline-color: #7da3a1;
.markdown {
  width: 100%;
  padding-top: 50px;
  *:first-child {
    margin-top: 0;
  }
  h1 {
    margin: 15px 0 10px 0;
    font-size: 1.6em;
    font-weight: bold;
    border-bottom: double 4px $border-color;
    word-wrap: break-word;
  }
  h2 {
    margin: 15px 0 10px 0;
    font-size: 1.37em;
    font-weight: bold;
    border-bottom: solid 2px $border-color;
    word-wrap: break-word;
  }
  h3 {
    margin: 15px 0 10px 0;
    font-size: 1.17em;
    font-weight: bold;
    border-bottom: dashed 2px $border-color;
    word-wrap: break-word;
  }
  h4 {
    margin: 15px 0 10px 0;
    font-size: 1em;
    font-weight: bold;
    border-bottom: dotted 1px $border-color;
    word-wrap: break-word;
  }
  h5 {
    margin: 15px 0 10px 0;
    font-size: 1em;
    font-weight: bold;
    word-wrap: break-word;
  }
  h6 {
    margin: 15px 0 10px 0;
    font-size: 0.9em;
    font-weight: bold;
    word-wrap: break-word;
  }
  p {
    margin-bottom: 10px;
    font-size: 1em;
    word-wrap: break-word;
  }
  ul {
    list-style-type: disc;
    word-wrap: break-word;
    ul {
      list-style-type: circle;
      word-wrap: break-word;
      ul {
        list-style-type: square;
        word-wrap: break-word;
      }
    }
  }
  ol {
    list-style-type: decimal;
    word-wrap: break-word;
    ol {
      list-style-type: upper-roman;
      word-wrap: break-word;
      ol {
        list-style-type: lower-roman;
        word-wrap: break-word;
      }
    }
  }
  table {
    margin-bottom: 20px;
  }
  %__table-element {
    padding: 6px 13px;
    border: solid 1px $table-border-color;
    color: #fff;
  }
  table th {
    @extend %__table-element;
    background-color: $th-bg-color;
  }
  table td {
    @extend %__table-element;
    color: #444;
    background-color: $td-bg-color;
  }
  hr {
    height: 1px;
    background-color: $border_color;
  }
  blockquote {
    padding: 10px 20px 10px 10px;
    border-left: solid 5px $border_color;
    word-wrap: break-word;
  }
  code {
    display: inline;
    padding: 2px 4px;
    color: $code-font-color;
    background-color: $code-bg-color;
    box-shadow: none;
    word-wrap: break-word;
  }
  pre {
    background-color: $pre-bg-color;
    word-wrap: break-word;
    code {
      color: $markdown-font-color;
      background-color: $pre-bg-color;
      word-wrap: break-word;
    }
  }
}
</style>
