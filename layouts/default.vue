<template>
  <v-app>
    <userHead v-if="$store.getters.isAuthenticated" />
    <defaultHead v-else />
    <nuxt style="overflow: hidden;" />
    <foot />
  </v-app>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import userHead from '@/components/layouts/mon-userHead'
import defaultHead from '@/components/layouts/mon-head'
import foot from '@/components/layouts/mon-foot'

export default {
  components: {
    userHead,
    defaultHead,
    foot
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['setUser'])
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
