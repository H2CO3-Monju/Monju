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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware({ store, redirect }) {
    // Vuexのlocalstrageを使用している場合setTimeOutをしないとstoreから値を取得できない
    // console.log(store.state.event.event) <= ここではアクセスできない

    // middlewareは一番初めに動くのでthisでdata内やメソッドにアクセスできない
    setTimeout(() => {
      console.log(store.state.event.event)
    })
  },
  computed: {
    ...mapGetters({
      getEvent: 'event/getEvent'
    }),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    setTimeout(() => {
      console.log(this.getEvent)
      console.log(this.isAuthenticated)
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
ul {
  padding: 0;
}
.bg {
  background-color: $_bg_color;
}
@media screen and (max-width: 600px) {
  .container {
    width: 95%;
  }
  .bg {
    padding: 1vh 0;
  }
}
@media screen and (min-width: 600px) {
  .container {
    width: 70%;
  }
  .bg {
    padding: 5vh 0;
  }
}
.container {
  height: auto;
  margin: 0 auto;
  padding: 50px 60px;
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
