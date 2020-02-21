<template>
  <v-app>
    <defaultHead v-if="state == 'defaultHead'" />
    <userHead v-else-if="state == 'userHead'" />
    <nuxt style="overflow: hidden;" />
    <foot />
  </v-app>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
import userHead from '@/components/layouts/mon-userHead'
import defaultHead from '@/components/layouts/mon-head'
import foot from '@/components/layouts/mon-foot'

export default {
  middleware({ store, redirect }) {
    // Vuexのlocalstrageを使用している場合setTimeOutをしないとstoreから値を取得できない
    setTimeout(() => {
      if (store.getters.isAuthenticated) {
        this.state = 'userHead'
      } else {
        this.state = 'defaultHead'
      }
    })
  },
  components: {
    userHead,
    defaultHead,
    foot
  },
  data() {
    return {
      state: 'defaultHead'
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
      if (this.isAuthenticated) {
        this.state = 'userHead'
      } else {
        this.state = 'defaultHead'
      }
    })
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
