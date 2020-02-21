<template>
  <div class="text-center">
    <v-btn @click="clickEvent" class="white--text" color="#C4D929">
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
    },
    needsEvent: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    clickEvent() {
      if (this.needsEvent) {
        this.$emit('btnClick')
      }
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
