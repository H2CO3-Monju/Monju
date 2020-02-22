<template>
  <div class="bg">
    <div class="container"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware({ store, redirect }) {
    // Vuexのlocalstrageを使用している場合setTimeOutをしないとstoreから値を取得できない
    setTimeout(function() {
      console.log(store.state.event)
    })
  },
  computed: {
    ...mapGetters({
      getEvent: 'event/getEvent'
    }),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    console.log(this.getEvent)
    console.log(this.isAuthenticated)
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}
.bg {
  background-color: $_bg_color;
}
@media screen and (max-width: 600px) {
  .container {
    width: 95%;
  }
  .bg {
    padding: 1vh 0;
  }
}
@media screen and (min-width: 600px) {
  .container {
    width: 70%;
  }
  .bg {
    padding: 5vh 0;
  }
}
.container {
  height: auto;
  margin: 0 auto;
  padding: 50px 60px;
  border-radius: 20px;
  color: $_font_color;
  background-color: $_container_white;
}
</style>
