<template>
  <regist>
    <div class="allWrap columns is-mobile">
      <div class="regist-container column is-4">
        <div v-if="isConfirm" class="regist-wrap column">
          <di class="regist-title" data-tilt>
            <h1>この内容でよろしかったですか？</h1>
          </di>
          <div class="regist-confirm">
            <p>ユーザーネーム: {{ name }}</p>
            <p>メールアドレス: {{ email }}</p>
            <p v-if="isHidden" class="regist-confirm-password">
              パスワード: {{ hidePassword }}
              <span
                v-on:click="switchSymbol"
                class="regist-confirm-password-symbol"
              >
                <i class="fas fa-eye-slash" aria-hidden="true"></i>
              </span>
            </p>
            <p v-else class="regist-confirm-password">
              パスワード: {{ password }}
              <span
                v-on:click="switchSymbol"
                class="regist-confirm-password-symbol"
              >
                <i class="fas fa-eye" aria-hidden="true"></i>
              </span>
            </p>
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
              class="input-wrap validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <div class="symbolAndInput columns is-mobile">
                <span class="inputSymbol column is-1 column">
                  <i class="fas fa-user" aria-hidden="true"></i>
                </span>
                <input
                  v-model="name"
                  class="input column is-11"
                  type="text"
                  name="name"
                  placeholder="ユーザーネーム"
                  autocomplete="off"
                />
              </div>
              <p v-if="!!nameError" class="input-error-msg">
                {{ nameError }}
              </p>
            </div>

            <div
              class="input-wrap validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <div class="symbolAndInput columns is-mobile">
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
              <p v-if="!!emailError" class="input-error-msg">
                {{ emailError }}
              </p>
            </div>

            <div
              class="input-wrap validate-input"
              data-validate="Password is required"
            >
              <div class="symbolAndInput columns is-mobile">
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
              <p v-if="!!passwordError" class="input-error-msg">
                {{ passwordError }}
              </p>
            </div>

            <div
              class="input-wrap validate-input"
              data-validate="Password is required"
            >
              <div class="symbolAndInput columns is-mobile">
                <span class="inputSymbol column is-1">
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
              <p v-if="!!passwordConfirmError" class="input-error-msg">
                {{ passwordConfirmError }}
              </p>
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
      'ユーザーネームは半角英字と半角数字を必ず含んでください。使用できる記号はハイフン(-)とアンダースコア(_)のみです'
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
  if (!password) {
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
const checkConfirmPassword = (confirm) => {
  let text = null
  if (!confirm) {
    text = 'パスワードをもう一度入力してください'
  }
  return text
}

export default {
  middleware({ store, redirect }) {
    // Vuexのlocalstrageを使用している場合setTimeOutをしないとstoreから値を取得できない
    setTimeout(() => {
      console.log('isAuthenticated: ', store.getters.isAuthenticated)
      if (store.getters.isAuthenticated) {
        return redirect('/')
      }
    })
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
      isConfirm: false,
      isHidden: true,
      nameError: false,
      emailError: false,
      passwordError: false,
      passwordConfirmError: false
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated']),
    hidePassword() {
      let hiddenPassword = ''
      for (let i = 0; i < this.password.length; i++) {
        hiddenPassword += '*'
      }
      return hiddenPassword
    }
  },
  mounted() {
    const errorCheck = () => {
      if (location.hash !== '#confirm') {
        this.isConfirm = false
        return
      }
      this.nameError = checkUserName(this.name)
      this.emailError = checkEmail(this.email)
      this.passwordError = checkPassword(this.password, this.password_confirm)
      this.passwordConfirmError = checkConfirmPassword(this.password_confirm)
      if (
        !this.nameError &&
        !this.emailError &&
        !this.passwordError &&
        !this.passwordConfirmError
      ) {
        this.isConfirm = true
      } else {
        this.$router.push('')
        this.isConfirm = false
      }
    }
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
      if (this.isAuthenticated) {
        this.$router.push('/')
      }
    })
    errorCheck()
    window.addEventListener('hashchange', errorCheck)
  },
  methods: {
    ...mapActions(['setUser']),

    switchSymbol() {
      console.log('test')
      this.isHidden = !this.isHidden
    },

    regist() {
      if (!this.name) {
        window.alert('ユーザーIDを入力してください')
        return
      } else if (this.password !== this.password_confirm) {
        window.alert('パスワードが一致していません')
        return
      }
      console.log('ちょっと待ってね！')
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
@import '~assets/scss/regist.scss';
</style>
