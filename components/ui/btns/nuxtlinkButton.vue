<template>
  <div class="text-center">
    <v-btn class="white--text" color="#C4D929">
      <nuxt-link :to="path">
        {{ text }}
      </nuxt-link>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.v-application a {
  color: $_color-white;
  font-weight: bold;
}
</style>
