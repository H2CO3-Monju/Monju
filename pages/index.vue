<template>
  <div class="allWrap">
    <!-- コンテンツ -->
    <div class="container">
      <section class="area">
        <defaultHead />
        1
      </section>
      <section class="area">
        2
      </section>
      <section class="area">
        3
      </section>
      <section class="area">
        4
      </section>
      <section class="area">
        5
      </section>
    </div>
  </div>
</template>

<script>
import defaultHead from '@/components/layouts/mon-head'
export default {
  components: {
    defaultHead
  }
}
</script>

<style lang="scss" scoped>
.allWrap {
  // スクロール
  .container {
    overflow: auto;
    scroll-snap-type: y mandatory;
    height: 100vh;
    max-width: 100vw;
    padding: 0;
    .area {
      scroll-snap-align: start;
      height: 100vh;
      width: 100vw;
    }
    .area:nth-child(1) {
      background: #dff9fb;
    }
    .area:nth-child(2) {
      background: #c7ecee;
    }
    .area:nth-child(3) {
      background: #95afc0;
    }
    .area:nth-child(4) {
      background: #535c68;
    }
  }
}
</style>
