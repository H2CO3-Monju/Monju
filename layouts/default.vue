<template>
  <v-app>
    <userHead v-if="state == 'userHead'" />
    <defaultHead v-if="state == 'defaultHead'" />
    <nuxt style="overflow: hidden;" />
    <foot />
  </v-app>
</template>

<script>
import userHead from '@/components/layouts/mon-userHead'
import defaultHead from '@/components/layouts/mon-head'
import foot from '@/components/layouts/mon-foot'

export default {
  components: {
    userHead,
    defaultHead,
    foot
  },
  data() {
    return {
      state: 'defaultHead'
    }
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
