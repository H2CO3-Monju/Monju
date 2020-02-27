<template>
  <div class="slide">
    <div class="container">
      <section class="area">
        <defaultHead />
        <div class="sectionwrap">
          <div>
            <h2>
              Six eyes see <br />
              more than two.
            </h2>
            <p>
              Monjuは、勉強会に参加したい<br />
              あなたのためのサービスです。<br />
              いつでもどこでも、<br />
              気軽に勉強に参加しましょう！
            </p>
            <newBtn />
          </div>
          <div class="sectionImg">
            <img src="https://placehold.jp/1268x966.png" alt="イメージ画像1" />
          </div>
        </div>
      </section>

      <section class="area">
        <div class="sectionwrap">
          <div>
            <h2>
              好きな時間に、<br />好きな場所から、<br />
              勉強会に参加しよう
            </h2>
            <p>
              Monju上であなたの興味のある分野の勉強会を、<br />
              『チャット・通話・ビデオチャット』などを用いて<br />
              気軽に参加、主催することが出来ます。
            </p>
          </div>
          <div class="sectionImg">
            <img src="https://placehold.jp/1268x966.png" alt="イメージ画像1" />
          </div>
        </div>
      </section>
      <section class="area">
        <div class="sectionwrap">
          <div>
            <h2>二種類の勉強会から<br />自分の気分にあった形式を選べる</h2>
            <p>
              "発表勉強会と交流勉強会"から気分にあった勉強会を選べます。<br />
              交流勉強会はテーマに沿って自由に交流しながら学習でき、<br />
              発表勉強会はプレゼン形式でテーマについて学ぶことができます。
            </p>
          </div>
          <div class="sectionImg">
            <img src="https://placehold.jp/440x330.png" alt="イメージ画像" />
            <img src="https://placehold.jp/440x330.png" alt="イメージ画像" />
          </div>
        </div>
      </section>
      <section class="area">
        <div class="sectionwrap">
          <div>
            <h2>Monjから勉強会の輪を広げよう</h2>
            <p>
              コミュニティー機能・個人チャットやタグを用いた検索機能などで<br />
              知らない人とでも興味のある分野で勉強会で繋がる事ができます。
            </p>
          </div>
          <div class="sectionImg">
            <img src="https://placehold.jp/440x330.png" alt="イメージ画像" />
            <img src="https://placehold.jp/440x330.png" alt="イメージ画像" />
          </div>
        </div>
      </section>
      <section class="area">
        <div class="sectionwrap">
          <div class="sectionbox">
            <p>
              さっそく始めよう。<br />
              新しいコミュニティ、新しい勉強仲間をみつけよう。
            </p>
            <div class="letbtn">
              新規登録
            </div>
          </div>
        </div>
      </section>
      <foot />
    </div>
  </div>
</template>

<script>
import defaultHead from '@/components/layouts/mon-head'
import foot from '@/components/layouts/mon-foot'
import newBtn from '@/components/ui/btns/topBtn'

export default {
  components: {
    defaultHead,
    foot,
    newBtn
  }
}
</script>

<style lang="scss">
.slide {
  margin: 0;
  padding: 0;
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
      background: url('~assets/images/random-shapes.svg');
      background-color: #55c500;
      width: 100%;
      display: block;
      overflow: auto;
      .sectionwrap {
        display: flex;
        text-align: center;
        padding: 0px 4%;
        margin: 0px auto;
        h2 {
          color: #fff;
          font-size: 60px;
          text-align: left;
          margin-top: 8vh;
          letter-spacing: 0.06em;
          font-weight: bold;
        }
        p {
          text-align: left;
          color: #fff;
          margin-top: 20px;
          font-weight: 600;
          max-width: 570px;
          line-height: 170%;
          font-size: 20px;
          letter-spacing: 0.09em;
          padding-top: 15px;
        }
        .sectionImg {
          width: 100%;
          min-width: 500px;
          max-width: 700px;
          height: auto;
          img {
            width: 100%;
            margin-top: 8vh;
            margin-left: 40px;
            max-width: 700px;
          }
        }
      }
    }

    .area:nth-child(2) {
      background-color: rgb(59, 165, 153);
      width: 100%;
      display: block;
      height: 689px;
      max-height: 689px;
      overflow: auto;
      .sectionwrap {
        display: flex;
        text-align: center;
        padding: 0px 4%;
        margin: 0px auto;
        h2 {
          color: #fff;
          font-size: 50px;
          text-align: left;
          margin-top: 12vh;
          letter-spacing: 0.06em;
        }
        p {
          text-align: left;
          color: #fff;
          margin-top: 20px;
          font-weight: 600;
          max-width: 570px;
          line-height: 170%;
          font-size: 20px;
          letter-spacing: 0.09em;
          padding-top: 15px;
        }
        .sectionImg {
          width: 50%;
          min-width: 300px;
          img {
            width: 100%;
            margin-top: 12vh;
            margin-left: 40px;
            max-width: 700px;
          }
        }
      }
    }
    .area:nth-child(3) {
      width: 100%;
      display: block;
      height: 689px;
      max-height: 689px;
      overflow: auto;
      background-color: rgb(167, 125, 194);
      padding-bottom: 3vh;
      padding-top: 3vh;
      .sectionwrap {
        text-align: center;
        padding: 0px 4%;
        margin: 0px auto;
        h2 {
          color: #fff;
          font-size: 60px;
          letter-spacing: 0.06em;
        }
        p {
          color: #fff;
          font-weight: 600;
          line-height: 170%;
          font-size: 20px;
          letter-spacing: 0.09em;
          padding-top: 15px;
          max-width: 800px;
          margin: 0px auto;
        }
        .sectionImg {
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          padding-top: 20px;
          img {
            max-height: 330px;
            width: auto;
            margin: 0 10px;
          }
        }
      }
    }
    .area:nth-child(4) {
      width: 100%;
      display: block;
      height: 689px;
      max-height: 689px;
      overflow: auto;
      background-color: rgb(242, 153, 49);
      padding-bottom: 50px;
      padding-top: 5vh;
      .sectionwrap {
        text-align: center;
        padding: 0px 4%;
        margin: 0px auto;
        h2 {
          color: #fff;
          font-size: 60px;
          letter-spacing: 0.06em;
        }
        p {
          color: #fff;
          font-weight: 600;
          line-height: 170%;
          font-size: 20px;
          letter-spacing: 0.09em;
          padding-top: 15px;
          max-width: 800px;
          margin: 0px auto;
        }
        .sectionImg {
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          padding-top: 20px;
          img {
            max-height: 330px;
            width: auto;
            margin: 0 10px;
          }
        }
      }
    }
    .area:nth-child(5) {
      width: 100%;
      display: block;
      height: 689px;
      max-height: 689px;
      overflow: auto;
      background-color: rgb(253, 218, 99);
      padding-bottom: 50px;
      padding-top: 50px;
      .sectionwrap {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-top: 100px;
        .sectionbox {
          max-width: 570px;
          min-height: 400px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 16px 0px;
          background: rgb(255, 255, 255);
          border-radius: 10px;
          padding: 80px 30px;
          p {
            color: #707070;
            font-weight: 600;
            line-height: 170%;
            font-size: 20px;
            letter-spacing: 0.09em;
            padding-top: 15px;
            max-width: 800px;
            text-align: center;
          }
          .letbtn {
            display: block;
            width: 265px;
            height: 55px;
            text-align: center;
            background-color: rgb(82, 158, 204);
            color: rgb(255, 255, 255);
            font-size: 18px;
            cursor: pointer;
            font-weight: bold;
            letter-spacing: 0.07em;
            margin: 50px auto 0px;
            border-radius: 55px;
            line-height: 55px;
          }
        }
      }
    }
  }
}
</style>

<style lang="css" scoped>
html,
body,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
form,
input,
div {
  margin: 0px;
  padding: 0px;
}
* {
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
body {
  font-family: -apple-system, blinkMacSystemFont, lato, 'Helvetica Neue',
    'Segoe UI', YuGothicM, YuGothic, Meiryo, sans-serif;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
div {
  outline: none;
  display: block;
}
</style>
