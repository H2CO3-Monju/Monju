<template>
  <div class="allWrap">
    <!-- コンテンツ -->
    <div class="container">
      <section class="area">1</section>
      <section class="area">2</section>
      <section class="area">3</section>
      <section class="area">4</section>
      <section class="area">5</section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// スクロール
.container {
  overflow: auto;
  scroll-snap-type: y mandatory;
  height: 100vh;
  .area {
    scroll-snap-align: start;
    height: 100vh;
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
</style>
