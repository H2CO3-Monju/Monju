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
        ref="inputText"
      />
      <!-- <p><small>※タグの追加は5つまでです</small></p> -->
    </div>
    <ul id="tags" class="tags">
      <tag
        class="tags__tag"
        :value="tag"
        :key="index"
        @delete="deleteFromTags"
        v-for="(tag, index) in tags"
      />
    </ul>
  </div>
</template>

<script>
import inputText from '@/components/new/inputText'
import tag from '@/components/new/tag'
export default {
  components: {
    inputText,
    tag
  },
  data() {
    return {
      tags: [],
      tagRules: [
        (v) => v.length <= 24 || 'タグは24文字以内で入力してください。',
        (v) =>
          this.tags.length <= 5 ||
          `タグの追加は5個までです。${this.tags.length - 5}個削除してください。`
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
        if (this.tags.length >= 10) return
        const message = { message: input.value }
        this.tags.push(message)
        this.$refs.inputText.checkValidate()
      })
    },
    deleteFromTags(targetIndex) {
      this.tags.splice(targetIndex, 1)
      this.$refs.inputText.checkValidate()
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
}
</style>
