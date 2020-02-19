<template>
  <div class="text-center">
    <v-btn class="white--text" color="#C4D929">
      {{ text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    text: {
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
