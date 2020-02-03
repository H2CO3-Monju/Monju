<template>
  <regist>
    <div class="allWrap columns">
      <div class="regist-container column is-4 is-offset-4">
        <!-- <div v-if="isAuthenticated" class="regist-wrap column">
          <div class="regist-title" data-tilt>
            <h1>読み込み中…</h1>
          </div>
        </div> -->

        <div v-if="isConfirm" class="regist-wrap column">
          <di class="regist-title" data-tilt>
            <h1>この内容でよろしかったですか？</h1>
          </di>
          <div class="regist-confirm">
            <p>ユーザーネーム: {{ name }}</p>
            <p>メールアドレス: {{ email }}</p>
            <p>パスワード: {{ password }}</p>
          </div>
          <div class="buttons container-regist-form-btn">
            <button v-on:click="regist" class="regist-form-btn button">
              Regist
            </button>
          </div>
        </div>

        <div v-else class="regist-wrap column">
          <div class="regist-title" data-tilt>
            <h1>Monjuに新規登録</h1>
          </div>

          <div class="regist-form validate-form">
            <div
              class="inputsWrap validate-input columns"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span class="symbol-input column is-1">
                <i class="fas fa-user" aria-hidden="true"></i>
              </span>
              <input
                v-model="name"
                class="input column is-11"
                type="text"
                name="name"
                placeholder="ユーザーネーム"
              />
            </div>

            <div
              class="inputsWrap validate-input columns"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span class="symbol-input column is-1">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <input
                v-model="email"
                class="input column is-11"
                type="text"
                name="email"
                placeholder="メールアドレス"
              />
            </div>

            <div
              class="inputsWrap validate-input columns"
              data-validate="Password is required"
            >
              <span class="symbol-input column is-1">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
              <input
                v-model="password"
                class="input is-11"
                type="password"
                name="pass"
                placeholder="パスワード"
              />
            </div>

            <div
              class="inputsWrap validate-input columns"
              data-validate="Password is required"
            >
              <span class="symbol-input column is-1">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
              <input
                v-model="password_confirm"
                class="input is-11"
                type="password"
                name="pass_confirm"
                placeholder="パスワードを確認"
              />
            </div>

            <div class="buttons container-regist-form-btn">
              <a href="#confirm" class="regist-form-btn button">
                Regist
              </a>
            </div>
          </div>

          <hr class="regist_hr" />

          <div class="regist-authentication">
            <button class="regist-auth-facebook regist-auth_btn">
              <span class="regist-auth-symbol">
                <i class="fab fa-facebook-f fa-4x" aria-hidden="true"></i>
              </span>
            </button>

            <button class="regist-auth-twitter regist-auth_btn">
              <span class="regist-auth-symbol">
                <i class="fab fa-twitter fa-4x" aria-hidden="true"></i>
              </span>
            </button>

            <button class="regist-auth-github regist-auth_btn">
              <span class="regist-auth-symbol">
                <i class="fab fa-github github-symbol" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </regist>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'

const registUser = firebase.functions().httpsCallable('registUser')
const checkUserName = (name) => {
  let text = null
  if (!name) {
    text = 'ユーザーネームが入力されていません'
  } else if (name.length < 5) {
    text = 'ユーザーネームは5文字以上で入力してください'
  } else if (!name.match(/^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d-_]+$/)) {
    // 半角英字と半角数字を含んでいないか、ハイフンとアンダースコア以外の文字を使用している場合
    // 実例: (aBcCd), (11223), (aab_-) => エラー, (aa1_-),(AAa11) => 許可
    text =
      'ユーザーネームは半角英字と半角数字を必ず含んでください。使用できる記号はハイフンとアンダースコアのみです'
  }
  return text
}
const checkEmail = (email) => {
  let text = null
  if (!email) {
    text = 'メールアドレスが入力されていません'
  } else if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    text = 'メールアドレスが正しくありません'
  }
  return text
}
const checkPassword = (password, confirm) => {
  let text = null
  if (!password || !confirm) {
    text = 'パスワードが入力されていません'
  } else if (password !== confirm) {
    text = 'パスワードが一致していません'
  } else if (password.length < 6) {
    text = 'パスワードは6文字以上入力してください'
  } else if (password.length > 50) {
    text = 'パスワードは50文字以内で入力してください'
  } else if (
    !password.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]+$/)
  ) {
    // 半角英大文字、半角英小文字、数字のいずれかが一つでも存在しないか、それ以外の文字が入力された場合
    // 実例: (Abc-01), (abc001) => エラー, (Abc001) => 許可
    text =
      'パスワードは半角英大文字、半角英小文字、半角数字のみを使用し、全て必ず含んでください'
  }
  return text
}

export default {
  data() {
    return {
      isConfirm: false,
      name: '',
      email: '',
      password: '',
      password_confirm: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    const errorCheck = () => {
      if (location.hash === '#confirm') {
        const errorMsg1 = checkUserName(this.name)
        const errorMsg2 = checkEmail(this.email)
        const errorMsg3 = checkPassword(this.password, this.password_confirm)
        console.log(errorMsg1)
        console.log(errorMsg2)
        console.log(errorMsg3)
        if (!errorMsg1 && !errorMsg2 && !errorMsg3) {
          this.isConfirm = true
        } else {
          this.$router.push('')
          this.isConfirm = false
        }
      } else {
        this.isConfirm = false
      }
    }
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
      // if (this.isAuthenticated) {
      //   this.$router.push('/')
      // }
    })
    errorCheck()
    window.addEventListener('hashchange', errorCheck)
  },
  methods: {
    ...mapActions(['setUser']),

    regist() {
      if (!this.name) {
        window.alert('ユーザーIDを入力してください')
        return
      } else if (this.password !== this.password_confirm) {
        window.alert('パスワードが一致していません')
        return
      }
      registUser({
        uid: this.name,
        email: this.email,
        password: this.password
      })
        .then(async (result) => {
          await this.login()
          console.log(result)
          window.alert('登録が完了しました。')
        })
        .catch((error) => {
          console.log(error)
          console.log(error.code)
          console.log(error.message)
        })
    },

    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          // ログインしたら飛ぶページを指定
          // this.$router.push("/member-page")
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

  .regist-container {
    height: calc(100vh - 57px);
    .regist-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 75vh;
      min-height: 460px;
      margin-top: 7.5vh;
      padding-top: 5%;
      padding-bottom: 5%;
      background-color: rgba(#eee, 0.8);
      border: solid 1px #fff;
      border-radius: 10%;
      .regist-title {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        font-size: 1.6em;
      }
      .regist-confirm p {
        font-size: 1.2em;
      }
      .regist-form {
        .inputsWrap {
          width: 80%;
          margin: 0 auto 5%;
          .symbol-input {
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
      .container-regist-form-btn {
        justify-content: center;
        .regist-form-btn {
          background-color: #c4d929;
          border-color: transparent;
          color: #fff;
        }
      }
      .regist_hr {
        margin: 0;
        border-top: 1px solid #fff;
      }
      .regist-authentication {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 10%;
        .regist-auth_btn {
          padding: 0;
          width: 70px;
          height: 70px;
          border: none;
          border-radius: 100%;
        }
        .regist-auth-facebook {
          color: #fff;
          background-color: #0057ac;
        }
        .regist-auth-twitter {
          color: #fff;
          background-color: #00aff5;
        }
        .regist-auth-github {
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
