<template>
  <div class="fixed-member">
    <div class="fixed-member__inner">
      <h2>定員</h2>
      <div>
        <input type="number" class="fixed-member__input lightblue-input" />
        <label for="fixed-member_input">人</label>
      </div>
      <p>
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
export default {
  props: {
    small: {
      type: String,
      required: true
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
  &__inner {
    margin-bottom: 20px;
  }
  &__input {
    margin: 0 5px 5px;
    width: 100px;
    height: 2em;
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
