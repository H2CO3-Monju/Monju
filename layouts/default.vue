<template>
  <v-app>
    <mon-head />
    <nuxt style="overflow: hidden;" />
    <mon-foot />
  </v-app>
</template>

<script>
import monHead from '@/components/common/mon-userHead'
import monFoot from '@/components/common/mon-foot'

export default {
  components: {
    monHead,
    monFoot
  }
}
</script>

<style lang="scss">
.theme--light.v-application {
  background: #ffffff;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(255, 255, 255);
}
</style>
