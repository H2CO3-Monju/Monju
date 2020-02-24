<template>
  <div class="bg">
    <v-container class="container">
      <v-row>
        <v-col>
          <v-row class="title">
            <h1 class="title__event-title">
              Javascriptでなんかすごいことやる in HAL東京
            </h1>
          </v-row>

          <v-row>
            <ul class="tags">
              <tag
                v-for="(tag, index) in event.tags"
                :shouldShowFontawesome="false"
                :value="tag"
                :key="index"
                class="tags__tag"
              />
            </ul>
          </v-row>

          <v-row class="event-info">
            <v-col class="event-info__left-column">
              <div class="event-info__image-wrap">
                <img id="preview" class="event-info__image" />
              </div>
            </v-col>
            <v-col>
              <v-row>
                <p>
                  {{ openDate }}〜{{ closeTime }}（{{ event.allotedTime }}時間）
                </p>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import tag from '@/components/pages/event/new/tag'
export default {
  middleware({ store, redirect }) {
    // Vuexのlocalstrageを使用している場合setTimeOutをしないとstoreから値を取得できない
    // console.log(store.state.event.event) <= ここではアクセスできない

    // middlewareは一番初めに動くのでthisでdata内やメソッドにアクセスできない
    setTimeout(() => {
      console.log(store.state)
      console.log(store.state.event.event)
    })
  },
  components: {
    tag
  },
  data() {
    return {
      event: '',
      openDate: '',
      closeTime: '',
      deadlineDate: ''
    }
  },
  computed: {
    ...mapGetters({
      getEvent: 'event/getEvent'
    }),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    setTimeout(() => {
      // storeのlocalStrage永続化の関係でmapState(['event'])を使っても
      // v-forでthis.eventの値を取得できないので一旦ここでdata内にeventを保存する
      const event = this.getEvent
      this.event = event
      document.getElementById('preview').setAttribute('src', this.event.file)
      this.openDate = this.processDate(this.event.openDate)
      this.closeTime = this.getCloseTime(
        this.event.openDate,
        this.event.allotedTime
      )
      this.deadlineDate = this.processDate(this.event.deadlineDate)
    })
  },
  methods: {
    processDate(date) {
      const y = date.substring(0, 4)
      let mo = date.substring(5, 7)
      const d = date.substring(8, 10)
      const h = date.substring(11, 13)
      const mi = date.substring(14, 16)
      const weekArray = ['日', '月', '火', '水', '木', '金', '土']
      const dayIndex = new Date(y + '/' + mo + '/' + d).getDay()
      const day = weekArray[dayIndex]
      if (mo.substring(0, 1) === '0') {
        mo = mo.slice(1)
      }
      const dateText =
        y + '年' + mo + '月' + d + '日' + '(' + day + ')' + ' ' + h + ':' + mi
      return dateText
    },
    getCloseTime(date, allotedTime) {
      const h = Number(date.substring(11, 13))
      let closeHour = h + Number(allotedTime)
      if (closeHour > 24) {
        closeHour -= 24
      }
      if (closeHour < 10) {
        closeHour = '0' + closeHour
      }
      const mi = date.substring(14, 16)
      const closeTime = closeHour + ':' + mi
      return closeTime
    }
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
  .title {
    color: $_font_color;
    border-bottom: solid 4px $border-color;
    &__event-title {
      font-size: 1.6em;
      font-weight: bold;
    }
    &__event-type {
      margin-bottom: 0;
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
      flex-grow: 0;
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
  }
}
.details__inner-markdown {
  *:first-child {
    margin-top: 0;
  }
  h1 {
    margin: 15px 0 10px 0;
    font-size: 1.6em;
    font-weight: bold;
    border-bottom: double 4px $border-color;
  }
  h2 {
    margin: 15px 0 10px 0;
    font-size: 1.37em;
    font-weight: bold;
    border-bottom: solid 2px $border-color;
  }
  h3 {
    margin: 15px 0 10px 0;
    font-size: 1.17em;
    font-weight: bold;
    border-bottom: dashed 2px $border-color;
  }
  h4 {
    margin: 15px 0 10px 0;
    font-size: 1em;
    font-weight: bold;
    border-bottom: dotted 1px $border-color;
  }
  h5 {
    margin: 15px 0 10px 0;
    font-size: 1em;
    font-weight: bold;
  }
  h6 {
    margin: 15px 0 10px 0;
    font-size: 0.9em;
    font-weight: bold;
  }
  p {
    margin-bottom: 10px;
    font-size: 1em;
  }
  ul {
    list-style-type: disc;
    ul {
      list-style-type: circle;
      ul {
        list-style-type: square;
      }
    }
  }
  ol {
    list-style-type: decimal;
    ol {
      list-style-type: upper-roman;
      ol {
        list-style-type: lower-roman;
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
  }
  code {
    display: inline;
    padding: 2px 4px;
    color: $code-font-color;
    background-color: $code-bg-color;
    box-shadow: none;
  }
  pre {
    background-color: $pre-bg-color;
    code {
      color: $markdown-font-color;
      background-color: $pre-bg-color;
    }
  }
}
</style>
