<template>
  <div class="presenterSelect item">
    <h2>発表者の選択</h2>
    <inputText
      ref="inputText"
      :id="'presenterSelect_input'"
      :rules="presenterSelectRules"
      :counter="24"
      :placeholder="'入力してください'"
      :autocomplete="'off'"
      :style="{ width: '300px' }"
    />
    <ul id="presenterItems" class="presenters">
      <tag
        :value="tag"
        :key="index"
        @delete="deleteFromTags"
        v-for="(tag, index) in tags"
        class="presenters__presenter"
      />
    </ul>
  </div>
</template>

<script>
import inputText from '@/components/pages/event/inputText'
import tag from '@/components/pages/event/tag'
export default {
  components: {
    inputText,
    tag
  },
  data() {
    return {
      tags: [],
      presenterSelectRules: [
        (v) =>
          document.activeElement ===
            document.getElementById('presenterSelect_input') ||
          this.tags.length !== 0 ||
          '発表者は最低でも1人は必要です',
        (v) => v.length <= 24 || '発表者の名前は24文字以内で入力してください。',
        (v) =>
          this.tags.length <= 10 ||
          `発表者の追加は10人までです。${this.tags.length -
            10}人削除してください。`,
        (v) => {
          const isNotDouble = !this.tags.find(
            (element) => element.message === v
          )
          return isNotDouble || 'その発表者は既に追加済みです'
        }
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
      const input = document.getElementById('presenterSelect_input')
      input.addEventListener('keydown', (e) => {
        if (e.keyCode !== 13) return
        if (input.value === '') return
        if (this.tags.length >= 11) return
        const isDouble = !!this.tags.find(
          (element) => element.message === input.value
        )
        if (isDouble) return
        const message = { message: input.value }
        this.tags.push(message)
        this.$refs.inputText.checkValidate()
        this.$refs.inputText.deleteValue()
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
  font-size: 1.17em;
  font-weight: bold;
}
.presenters {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 2px;
  &__presenter {
    margin-right: 8px;
    margin-bottom: 8px;
    padding-right: 8px;
    border: solid 1px $_font_color;
    border-radius: 3px;
    font-size: 0.8em;
  }
}
</style>
