<template>
  <login>
    <div class="allWrap columns is-mobile">
      <div class="login-container column is-4">
        <div class="login-wrap column">
          <div class="login-title" data-tilt>
            <h1>Monjuにログイン</h1>
          </div>

          <div class="login-form validate-form">
            <div
              class="input-wrap validate-input columns"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span class="inputSymbol column is-1">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <input
                v-model="email"
                class="input column is-11"
                type="text"
                name="email"
                placeholder="メールアドレス"
                autocomplete="off"
              />
            </div>

            <div
              class="input-wrap validate-input columns"
              data-validate="Password is required"
            >
              <span class="inputSymbol column is-1">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
              <input
                v-model="password"
                class="input is-11"
                type="password"
                name="pass"
                placeholder="パスワード"
                autocomplete="off"
              />
            </div>

            <div class="buttons container-login-form-btn">
              <button v-on:click="login" class="login-form-btn button">
                Login
              </button>
            </div>
          </div>

          <hr class="login_hr" />

          <div class="login-authentication">
            <button class="login-auth-facebook login-auth_btn">
              <span class="login-auth-symbol">
                <i class="fab fa-facebook-f fa-4x" aria-hidden="true"></i>
              </span>
            </button>

            <button class="login-auth-twitter login-auth_btn">
              <span class="login-auth-symbol">
                <i class="fab fa-twitter fa-4x" aria-hidden="true"></i>
              </span>
            </button>

            <button class="login-auth-github login-auth_btn">
              <span class="login-auth-symbol">
                <i class="fab fa-github github-symbol" aria-hidden="true"></i>
              </span>
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
  middleware({ store, redirect }) {
    // Vuexのlocalstrageを使用している場合setTimeOutをしないとstoreから値を取得できない
    setTimeout(() => {
      if (store.getters.isAuthenticated) {
        return redirect('/')
      }
    })
  },
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
  methods: {
    ...mapActions(['setUser']),
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          // ログイン後トップへ移動
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error)
        })
    },
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
@import '~assets/scss/login.scss';
</style>
