<template>
<!--
  ログアウトボタンがまだヘッダー内に未実装だったため、ログアウト用に作ったファイル
  後々消します
-->
  <login>
    <div class="allWrap columns">
      <div class="login-container column is-4 is-offset-4">
        <div v-if="isAuthenticated" class="login-wrap column">
          <div class="login-title" data-tilt>
            <button v-on:click="logout" class="login-form-btn button">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </login>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
  methods: {
    ...mapActions(['setUser']),
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null)
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.allWrap {
  margin-top: 0;
  margin-bottom: 0;
  min-height: 650px;
  background-image: url('~assets/images/mountain.jpg');
  background-size: cover;
  background-position: center center;

  .login-container {
    height: calc(100vh - 57px);
    .login-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 65vh;
      min-height: 400px;
      margin-top: 12.5vh;
      background-color: rgba(#eee, 0.8);
      border: solid 1px #fff;
      border-radius: 10%;
      .login-title {
        max-width: 80%;
        margin: 0 auto;
        text-align: center;
        font-size: 1.6em;
      }
      .container-login-form-btn {
        justify-content: center;
        .login-form-btn {
          background-color: #c4d929;
          border-color: transparent;
          color: #fff;
        }
      }
    }
  }
}
</style>
