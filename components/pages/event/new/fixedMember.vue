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
          :max="max"
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
            :max="max"
            class="autoCloseText__input lightblue-input"
            type="number"
            min="1"
          />
          人以上集まらなかったら自動的にイベントを閉鎖する
        </small>
      </p>
      <p v-if="!!errorMsg" class="autoCloseText__errorMsg">
        <small>
          {{ errorMsg }}
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import inputText from '@/components/pages/event/new/inputText'
export default {
  components: {
    inputText
  },
  props: {
    max: {
      type: Number,
      required: true
    },
    small: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      fixedMemberRules: [
        (v) => !!v || '定員は必須項目です',
        (v) => Number(v) <= this.max || `上限は${this.max}人です`,
        (v) => Number(v) >= 1 || '入力値が不正です'
      ],
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
        // マイナス(-)とピリオド(.)の入力の拒否
        if (e.keyCode === 189 || e.keyCode === 190) {
          e.preventDefault()
        }
      })
    },
    preventAutoCloseNumberInput() {
      const input = document.getElementById('autoCloseText__input')
      input.addEventListener('keydown', (e) => {
        // マイナス(-)とピリオド(.)の入力の拒否
        if (e.keyCode === 189 || e.keyCode === 190) {
          e.preventDefault()
        }
      })
    },
    showErrorMsg(errorMsg) {
      const input = document.getElementById('autoCloseText__input')
      input.classList.remove('lightblue-input')
      input.classList.add('errorColor-input')
      this.errorMsg = errorMsg
    },
    deleteValue() {
      const autoCloseNumberInput = document.getElementById(
        'autoCloseText__input'
      )
      this.$refs.inputText.deleteValue()
      autoCloseNumberInput.value = ''
      this.$refs.inputText.resetValidation()
      this.errorMsg = ''
      autoCloseNumberInput.classList.remove('errorColor-input')
      autoCloseNumberInput.classList.add('lightblue-input')
    },
    checkComponentValidate() {
      this.$refs.inputText.checkValidate()
      this.checkAutoCloseValidate()
    },
    checkAutoCloseValidate() {
      const fixedMemberInputValue = this.$refs.inputText.returnValue()
      const autoCloseNumberInput = document.getElementById(
        'autoCloseText__input'
      )
      const autoCloseNumberInputValue = Number(autoCloseNumberInput.value)
      const isInputTextProper = this.$refs.inputText.returnIsProper()

      if (autoCloseNumberInputValue === '') {
        this.showErrorMsg('締め切りまでの定員数は必須項目です')
        return false
      } else if (autoCloseNumberInputValue <= 0) {
        this.showErrorMsg('1以上の値を入力してください')
        return false
      } else if (!Number.isInteger(autoCloseNumberInputValue)) {
        this.showErrorMsg('自然数を入力してください')
        return false
      } else if (autoCloseNumberInputValue > fixedMemberInputValue) {
        this.showErrorMsg('定員数を上回っています')
        return false
      } else if (!isInputTextProper) {
        return false
      } else {
        autoCloseNumberInput.classList.remove('errorColor-input')
        autoCloseNumberInput.classList.add('lightblue-input')
        this.errorMsg = ''
        return true
      }
    },
    returnValues() {
      const fixedMember = this.$refs.inputText.returnValue()
      const autoCloseNumberInput = document.getElementById(
        'autoCloseText__input'
      )
      const autoCloseNumber = Number(autoCloseNumberInput.value)
      return { fixedMember, autoCloseNumber }
    },
    returnIsProper() {
      const isInputTextProper = this.$refs.inputText.returnIsProper()
      const isAutoCloseProper = this.checkAutoCloseValidate()
      if (isInputTextProper && isAutoCloseProper) {
        return true
      } else {
        return false
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
  &__errorMsg {
    margin-top: -16px;
    color: $_error_color;
  }
}
</style>
