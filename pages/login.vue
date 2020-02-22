<template>
  <div class="allWrap pd-2 columns is-mobile">
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
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
      if (this.isAuthenticated) {
        this.$router.push('/')
      }
    })
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
.allWrap {
  margin-top: 0;
  margin-bottom: 0;
  min-height: 650px;
  background-image: url('~assets/images/mountain.jpg');
  background-size: cover;
  background-position: center center;

  .login-container {
    min-width: 380px;
    height: calc(100vh - 57px);
    margin: 0 auto;
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
      .login-form {
        .input-wrap {
          width: 80%;
          margin: 0 auto 5%;
          .inputSymbol {
            padding-right: 0;
            padding-left: 0;
          }
          .input {
            margin: 0 auto;
            padding: 0;
            border-top: none;
            border-right: none;
            border-bottom: solid 1px;
            border-left: none;
            border-radius: 0%;
            background-color: transparent;
            box-shadow: none;
            font-size: 1.2em;
          }
        }
      }
      .container-login-form-btn {
        justify-content: center;
        .login-form-btn {
          background-color: #c4d929;
          border-color: transparent;
          color: #fff;
        }
      }
      .login_hr {
        margin: 0;
        border-top: 1px solid #fff;
      }
      .login-authentication {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 10%;
        .login-auth_btn {
          cursor: pointer;
          padding: 0;
          width: 70px;
          height: 70px;
          border: none;
          border-radius: 100%;
        }
        .login-auth-facebook {
          color: #fff;
          background-color: #0057ac;
        }
        .login-auth-twitter {
          color: #fff;
          background-color: #00aff5;
        }
        .login-auth-github {
          padding-top: 1px;
          padding-left: 1px;
          color: #24292e;
          background-color: #fff;
        }
        .github-symbol {
          font-size: 69px;
        }
      }
    }
  }
}
</style>
