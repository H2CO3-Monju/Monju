<template>
  <div class="fixed-member">
    <div class="fixed-member__inner">
      <h2>定員</h2>
      <div class="fixed-member__input-wrap">
        <inputText
          :id="'fixed-member__input'"
          :rules="fixedMemberRules"
          :type="'number'"
          :max="'10'"
          :min="'1'"
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
          <input class="autoCloseText__input lightblue-input" type="number" />
          人集まらなかったら自動的にイベントを閉鎖する
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import inputText from '@/components/new/inputText'
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
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.preventInput()
    })
  },
  methods: {
    preventInput() {
      const input = document.getElementById('fixed-member__input')
      input.addEventListener('keydown', (e) => {
        // マイナスの入力の拒否
        if (e.keyCode === 189) {
          e.preventDefault()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.12em;
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
  // &__inner {
  //   margin-bottom: 20px;
  // }
  // &__input {
  //   margin: 0 5px 5px;
  //   width: 100px;
  //   height: 2em;
  // }
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
