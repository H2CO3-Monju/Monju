<template>
  <span>
    <v-avatar color="#496f09" size="22">
      <img v-if="!!src" :src="src" alt="ユーザーアバター" />
      <span v-else class="v-avatar-span">{{ cutFirst }}</span>
    </v-avatar>
    {{ userName }}
  </span>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true
    },
    src: {
      type: [String, Boolean],
      default: false,
      required: false
    }
  },
  computed: {
    cutFirst() {
      return this.userName.substr(0, 1)
    }
  }
}
</script>

<style lang="scss">
.v-avatar-span {
  color: #fff;
  font-size: 0.8em;
}
</style>
