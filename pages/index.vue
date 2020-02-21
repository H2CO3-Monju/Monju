<template>
  <div class="allWrap">
    <!-- コンテンツ -->
    <div class="container">
      <section class="area">
        <defaultHead />
        <border />
        <v-card class="left-card_a" width="45%" height="45%">
          <v-card-title>
            Three eyes see more than two
          </v-card-title>
          <v-card-text>
            Monjuは、勉強会に参加したい<br />
            あなたのための場です。<br />
            実践的な力と経験を身につけて、<br />
            気軽に勉強会を開催しましょう！
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
        </v-card>
      </section>
      <foot />
    </div>
  </div>
</template>

<script>
import defaultHead from '@/components/layouts/mon-head'
import foot from '@/components/layouts/mon-foot'
import border from '@/components/ui/ations/border'
export default {
  layout: 'top',
  components: {
    defaultHead,
    border,
    foot
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
    .area {
      scroll-snap-align: start;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
    .area:nth-child(1) {
      background: #fff;
      color: #333;
      position: relative;

      .left-card_a {
        position: absolute;
        top: 40%;
        left: 40%;
        animation: move 1.5s linear 1s;
      }
      .right-card_a {
        position: absolute;
        bottom: 40%;
        right: 40%;
        .topImg {
          width: 50px;
        }
      }
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

<style lang="css">
@keyframes move {
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
