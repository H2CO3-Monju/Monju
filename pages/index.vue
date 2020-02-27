<template>
  <div class="allWrap">
    <div class="container">
      <section class="area">
        <!-- <defaultHead /> -->
        <!-- <border />
        <v-card class="left-card_a" width="45%" height="45%">
          <v-card-title>
            Three eyes see more than two
          </v-card-title>
          <v-card-text>
            Monjuは、勉強会に参加したい<br />
            あなたのためのサービスです。<br />
            いつでもどこでも、<br />
            気軽に勉強に参加しましょう！
          </v-card-text>
        </v-card>
        <v-card class="right-card_a" width="45%" height="45%">
          <img class="topImg01" src="~/assets/images/img01.svg" alt="勉強1" />
        </v-card>
      </section>
      <section class="area">
        <v-card class="left-card_a" width="45%" height="45%">
          あああああ
        </v-card>
        <v-card class="right-card_a" width="45%" height="45%">
          iiiiii
        </v-card>
      </section>
      <section class="area">
        <v-card class="left-card_a" width="45%" height="45%">
          あああああ
        </v-card>
        <v-card class="right-card_a" width="45%" height="45%">
          iiiiii
        </v-card>
      </section>
      <section class="area">
        <v-card class="left-card_a" width="45%" height="45%">
          あああああ
        </v-card>
        <v-card class="right-card_a" width="45%" height="45%">
          iiiiii
        </v-card>
      </section>
      <section class="area">
        <v-card class="left-card_a" width="45%" height="45%">
          あああああ
        </v-card>
        <v-card class="right-card_a" width="45%" height="45%">
          iiiiii
        </v-card> -->
        <sample />
      </section>
      <!-- <foot /> -->
    </div>
  </div>
</template>

<script>
// import defaultHead from '@/components/layouts/mon-head'
// import foot from '@/components/layouts/mon-foot'
import sample from '@/components/ui/design/sample'
// import border from '@/components/ui/actions/border'
export default {
  layout: 'top',
  components: {
    // defaultHead,
    sample
    // border,
    // foot
  }
}
</script>

<style lang="scss">
.allWrap {
  // スクロール
  .container {
    overflow: auto;
    scroll-snap-type: y mandatory;
    height: 100vh;
    max-width: 100vw;
    padding: 0;
    // .area {
    //   scroll-snap-align: start;
    //   height: 100vh;
    //   width: 100vw;
    //   overflow: hidden;
    // }
    // .area:nth-child(1) {
    //   background: #fff;
    //   color: #333;
    //   position: relative;

    //   .left-card_a {
    //     position: absolute;
    //     top: 25%;
    //     left: 25%;
    //     animation: l-move 1.5s linear 1s forwards;
    //   }
    //   .right-card_a {
    //     position: absolute;
    //     bottom: 25%;
    //     right: 25%;
    //     animation: r-move 1.5s linear 1s forwards;
    //     .topImg {
    //       width: 50px;
    //     }
    //   }
    // }
    // .area:nth-child(2) {
    //   background: #c7ecee;
    // }
    // .area:nth-child(3) {
    //   background: #95afc0;
    // }
    // .area:nth-child(4) {
    //   background: #535c68;
    // }
  }
}
</style>

<style lang="css">
@keyframes l-move {
  0% {
    transform: translateY(0) translateY(0);
    border-radius: 0;
  }

  100% {
    transform: translateY(-20%) translateX(-20%);
    border-radius: 10px;
  }
}
@keyframes r-move {
  0% {
    transform: translateY(0) translateY(0);
    border-radius: 0;
  }

  100% {
    transform: translateY(20%) translateX(20%);
    border-radius: 10px;
  }
}
</style>
