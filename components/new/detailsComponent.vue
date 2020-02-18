<template>
  <div class="details item">
    <h2>詳細</h2>
    <div class="details__inner">
      <ul class="details__inner-tabs">
        <li
          @click="toggleTab"
          :class="
            shouldShowPreview
              ? 'details__inner-tab'
              : 'details__inner-tab--active'
          "
        >
          マークダウン
        </li>
        <li
          @click="toggleTab"
          :class="
            shouldShowPreview
              ? 'details__inner-tab--active'
              : 'details__inner-tab'
          "
        >
          プレビュー
        </li>
      </ul>
    </div>
    <textarea class="details__inner-markdown" rows="20"></textarea>
    <div class="details__processed-markdown"></div>
  </div>
</template>

<script>
export default {
  head: {
    script: [{ src: '~/assets/js/marked.min.js' }]
  },
  data() {
    return {
      markdownText: '',
      shouldShowPreview: false
    }
  },
  methods: {
    toggleTab() {
      this.shouldShowPreview = !this.shouldShowPreview
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}
.details {
  h2 {
    margin-bottom: 5px;
    font-size: 1.12em;
    font-weight: bold;
  }
  &__inner-tabs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  %__inner-tab {
    cursor: pointer;
    width: 125px;
    padding: 7px 7px 5px 7px;
    border-width: 1px 1px 0 1px;
    border-style: solid;
    border-radius: 40px 40px 0 0;
    font-size: 0.88em;
    text-align: center;
  }
  &__inner-tab {
    @extend %__inner-tab;
    border-color: $_light_blue;
    &--active {
      @extend %__inner-tab;
      font-weight: bold;
      border-color: $_keyRimePie;
      background-color: $_keyRimePie;
      color: $_container_white;
    }
  }
  &__inner-markdown {
    width: 100%;
    height: 400px;
    padding: 6px 12px;
    border: solid 1px $_light_blue;
    color: $_input_color;
    font-size: 1em;
  }
}
</style>
