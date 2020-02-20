<template>
  <div class="fixed-member">
    <div class="fixed-member__inner">
      <h2>定員</h2>
      <div class="fixed-member__input-wrap">
        <inputText
          ref="inputText"
          :id="'fixed-member__input'"
          :rules="fixedMemberRules"
          :type="'number'"
          :max="10"
          :min="1"
          :style="{ width: '120px' }"
        />
        <label for="fixed-member__input" class="fixed-member__label">人</label>
      </div>
      <p class="fixed-member__small">
        <small>{{ small }}</small>
      </p>
    </div>

    <div class="autoCloseText">
      <p>
        <small>
          <span class="riceMark">＊</span>定員が締め切りまでに
          <input
            id="autoCloseText__input"
            class="autoCloseText__input lightblue-input"
            type="number"
          />
          人集まらなかったら自動的にイベントを閉鎖する
        </small>
      </p>
      <p v-if="errorMsg" class="errorColor-input">
        締め切りまでの定員数はゼロ以上の値を入力してください
      </p>
    </div>
  </div>
</template>

<script>
import inputText from '@/components/pages/event/inputText'
export default {
  components: {
    inputText
  },
  props: {
    small: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      fixedMemberRules: [
        (v) => !!v || '定員は必須項目です',
        (v) => Number(v) <= 10 || '上限は10人です',
        (v) => Number(v) >= 1 || '入力値が不正です'
      ],
      hasError: true,
      errorMsg: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.preventFixedMemberInput()
      this.preventAutoCloseNumberInput()
    })
  },
  methods: {
    preventFixedMemberInput() {
      const input = document.getElementById('fixed-member__input')
      input.addEventListener('keydown', (e) => {
        // マイナス(-)の入力の拒否
        if (e.keyCode === 189) {
          e.preventDefault()
        }
      })
    },
    preventAutoCloseNumberInput() {
      const input = document.getElementById('autoCloseText__input')
      input.addEventListener('keydown', (e) => {
        // マイナス(-)の入力の拒否
        if (e.keyCode === 189) {
          e.preventDefault()
        }
      })
    },
    showErrorMsg(errorMsg) {
      const input = document.getElementById('autoCloseText__input')
      input.classList.remove('lightblue-input')
      input.classList.add('errorColor-inputt')
      this.errorMsg = errorMsg
    },
    returnIsProper() {
      // TODO: ピリオドのキーコードを押下時処理
      const isInputTextProper = this.$refs.inputText.returnIsProper()
      const fixedMemberInputValue = this.$refs.inputText.returnValue()
      const autoCloseNumberInput = document.getElementById(
        'autoCloseText__input'
      )
      const autoCloseNumberInputValue = autoCloseNumberInput.value
      if (!isInputTextProper) return false
      if (autoCloseNumberInputValue < 0) {
        this.showErrorMsg('ゼロ以上の値を入力してください')
        return false
      } else if (!autoCloseNumberInputValue.isInteger()) {
        this.showErrorMsg('自然数を入力してください')
        return false
      } else if (autoCloseNumberInputValue > fixedMemberInputValue) {
        this.showErrorMsg('定員数を上回っています')
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.17em;
  font-weight: bold;
}
.fixed-member {
  &__input-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  &__label {
    padding-top: 5px;
    padding-left: 5px;
  }
  &__small {
    margin-top: -10px;
  }
}
.autoCloseText {
  .riceMark {
    color: #f34573;
    font-weight: bold;
  }
  &__inner {
    margin-bottom: 20px;
  }
  &__input {
    width: 50px;
    height: 1.4em;
  }
}
</style>
