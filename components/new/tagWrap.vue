<template>
  <div>
    <div class="title-tag__tag">
      <h2>タグ</h2>
      <inputText
        :id="'tag_input'"
        :rules="tagRules"
        :counter="24"
        :placeholder="'入力してください'"
        :autocomplete="'off'"
      />
      <!-- <p><small>※タグの追加は5つまでです</small></p> -->
    </div>
    <ul id="tags" class="tags">
      <li v-for="tag in tags" class="tags__tag">
        <i v-on:click="deleteTag" class="fas fa-times tags__fontawesome"></i>
        {{ tag.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import inputText from '@/components/new/inputText'
export default {
  components: {
    inputText
  },
  data() {
    return {
      tags: [],
      tagRules: [
        (v) => v.length <= 24 || 'タグは24文字以内で入力してください。'
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.addTag()
    })
  },
  methods: {
    addTag() {
      const input = document.getElementById('tag_input')
      input.addEventListener('keydown', (e) => {
        if (e.keyCode !== 13) return
        const message = { message: input.value }
        this.tags.push(message)
      })
    },
    deleteTag(event) {
      const targetLi = event.target.parentNode
      const ul = targetLi.parentNode
      const liNodes = ul.querySelectorAll('li')
      const liArray = Array.from(liNodes)
      const targetIndex = liArray.findIndex((element) => element === targetLi)
      // tags配列のtargetIndex番目の要素から1つ目までを削除
      this.tags.splice(targetIndex, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.12em;
  font-weight: bold;
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
    padding-right: 8px;
    border: solid 1px $_font_color;
    border-radius: 3px;
    font-size: 0.8em;
  }
  &__fontawesome {
    cursor: pointer;
    margin: 0;
    padding: 2px 8px;
    text-align: center;
    font-size: 0.8em;
  }
}
</style>
