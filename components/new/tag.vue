<template>
  <li>
    <i @click="deleteTag" class="fas fa-times tags__fontawesome"></i>
    {{ value.message }}
  </li>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: false
    }
  },
  methods: {
    deleteTag(event) {
      const targetLi = event.target.parentNode
      const ul = targetLi.parentNode
      const liNodes = ul.querySelectorAll('li')
      const liArray = Array.from(liNodes)
      const targetIndex = liArray.findIndex((element) => element === targetLi)
      // tags配列のtargetIndex番目の要素から1つ目までを削除
      this.$emit('delete', targetIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
.tags__fontawesome {
  cursor: pointer;
  margin: 0;
  padding: 2px 8px;
  font-size: 0.8em;
}
</style>
