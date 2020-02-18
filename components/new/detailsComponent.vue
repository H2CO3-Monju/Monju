<template>
  <div class="details item">
    <h2>詳細</h2>
    <div class="details__inner">
      <ul class="details__inner-tabs">
        <li
          @click="toggleTab"
          :class="
            shouldShowPreview
              ? 'details__inner-tab'
              : 'details__inner-tab--active'
          "
        >
          マークダウン
        </li>
        <li
          @click="toggleTab"
          :class="
            shouldShowPreview
              ? 'details__inner-tab--active'
              : 'details__inner-tab'
          "
        >
          プレビュー
        </li>
      </ul>
    </div>
    <div
      v-if="shouldShowPreview"
      v-html="htmlPreview"
      class="details__inner-markdown"
    ></div>
    <textarea
      v-else
      v-model="markdownText"
      class="details__inner-markdown"
      rows="20"
    ></textarea>
    <div class="details__processed-markdown"></div>
  </div>
</template>

<script>
export default {
  head: {
    script: [{ src: '/marked.min.js' }]
  },
  data() {
    return {
      shouldShowPreview: false,
      markdownText: '',
      htmlPreview: ''
    }
  },
  methods: {
    toggleTab() {
      this.shouldShowPreview = !this.shouldShowPreview
      if (this.shouldShowPreview) {
        // 外部リソースの関数を使うときは"window."が必要
        this.htmlPreview = window.marked(this.markdownText)
      }
    }
  }
}
</script>

<style lang="scss">
.details__inner-markdown {
  $markdown-font-color: #444;
  $border-color: $_keyRimePie;
  $code-font-color: #2257ca;
  $code-bg-color: #e8f0f7;
  $pre-bg-color: #f5f5f5;
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
<style lang="scss" scoped>
ul {
  padding: 0;
}
.details {
  h2 {
    margin-bottom: 5px;
    font-size: 1.12em;
    font-weight: bold;
  }
  &__inner-tabs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  %__inner-tab {
    cursor: pointer;
    width: 125px;
    padding: 7px 7px 5px 7px;
    border-width: 1px 1px 0 1px;
    border-style: solid;
    border-radius: 40px 40px 0 0;
    font-size: 0.88em;
    text-align: center;
  }
  &__inner-tab {
    @extend %__inner-tab;
    border-color: $_light_blue;
    &--active {
      @extend %__inner-tab;
      font-weight: bold;
      border-color: $_keyRimePie;
      background-color: $_keyRimePie;
      color: $_container_white;
    }
  }
  &__inner-markdown {
    word-wrap: break-word;
    width: 100%;
    min-height: 400px;
    padding: 6px 12px;
    border: solid 1px $_light_blue;
    color: $_input_color;
    font-size: 1em;
  }
}
// # これはh1タグです
// ## これはh2タグです
// ### これはh3タグです
// #### これはh4タグです
// ##### これはh5タグです
// ###### これはh6タグです
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk<br/>
// j

// j

// > 引用引用引用引用引用引用引用引用引用引用引用引用引用引用引用引用引用引用引用引用引用引用引用引用
// > 引用
// >> 多重引用

// `バッククォート一つで改行テスト(改行)
// してみた
// できるやんけ！`
// `バッククォート1つ`
// ```バッククォート<br/>2つ```

//     pre表示の
//         挙動
//             むずくね

// a
</style>
