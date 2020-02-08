<template>
  <div class="bg">
    <div class="container">
      <h1>新規イベント作成</h1>
      <div class="mainContents-wrap">
        <div class="event-img-wrap">
          <div class="event-img">
            <label class="image-icon-wrap">
              <span class="image-icons">
                <i class="far fa-image fa-5x" aria-hidden="true"></i>
              </span>
              <input
                id="eventImg"
                class="hidden"
                type="file"
                name="s_file"
                accept="image/*"
              />
            </label>
          </div>
          <img id="preview" />
        </div>

        <div class="title-tag-wrap">
          <div class="title-wrap">
            <h2>タイトル</h2>
            <input
              type="text"
              class="title-tag-input title-input text-input"
              placeholder="簡潔かつ目が惹かれるようなタイトルを！"
            />
          </div>
          <div class="tag-wrap">
            <h2>タグ</h2>
            <input
              type="text"
              class="title-tag-input tag-input text-input"
              placeholder="入力してください"
            />
            <p><small>※タグの追加は5つまでです</small></p>
          </div>
        </div>
      </div>

      <div class="termAndTime">
        <h2>期間と日時</h2>
        <div class="time-inputs-wrap">
          <input class="input-date" type="date" />
          <input class="input-time" type="time" />
          <select class="select-hour" name="hour">
            <option value="one-hour">1時間</option>
            <option value="two-hour">2時間</option>
            <option value="three-hour">3時間</option>
            <option value="four-hour">4時間</option>
            <option value="five-hour">5時間</option>
          </select>
        </div>
        <p>
          ※時間は原則1時間〜５時間までです。延長は出来ないので、時間は多めに見積もって作成してください。
        </p>
      </div>

      <div class="deadline">
        <h2>締め切り</h2>
        <div class="time-input-wrap">
          <input type="date" />
          <input type="time" />
        </div>
      </div>

      <div class="event-type">
        <h2>勉強会の種類</h2>
      </div>
    </div>
  </div>
</template>

<script>
const showImg = () => {
  document.getElementById('eventImg').addEventListener('change', (e) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      document.getElementById('preview').setAttribute('src', e.target.result)
    }
    reader.readAsDataURL(e.target.files[0])
  })
}
export default {
  mounted() {
    this.$nextTick(() => {
      showImg()
    })
  }
}
</script>

<style lang="scss" scoped>
$font_color: #7994a7;
$light_blue: #b2cde0;
$catskill_white: #f9fcfb;
$tundora: #444;

.bg {
  padding: 5vh 0;
  background-color: $tundora;
}
.container {
  width: 85%;
  height: 1000px;
  margin: 0 auto;
  padding: 50px 60px;
  border-radius: 20px;
  color: $font_color;
  background-color: $catskill_white;
  h1 {
    margin-bottom: 20px;
    font-size: 2em;
  }
  h2 {
    font-size: 1.4em;
  }
  .text-input {
    color: $tundora;
    font-size: 1.2em;
  }
  .mainContents-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    .event-img-wrap {
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 400px;
      margin-right: 40px;
      color: $light_blue;
      // min-width: 400px;
      .event-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 266px;
        border: $light_blue 3px dashed;
        .image-icon-wrap {
          display: inline-block;
          .image-icons {
            cursor: pointer;
            position: relative;
            &::after {
              position: absolute;
              top: -58px;
              right: -6px;
              font-size: 2em;
              font-family: 'Font Awesome 5 Free';
              font-weight: bold;
              text-shadow: 3px 3px 0 $catskill_white,
                -3px -3px 0 $catskill_white, -3px 3px 0 $catskill_white,
                3px -3px 0 $catskill_white, 0px 3px 0 $catskill_white,
                0 -3px 0 $catskill_white, -3px 0 0 $catskill_white,
                -3px 0 0 $catskill_white, 3px 0 0 $catskill_white;
              content: '\f067';
            }
          }
          .hidden {
            display: none;
          }
        }
      }
    }
    .title-tag-wrap {
      flex-grow: 1;
      flex-basis: 400px;
      .title-tag-input {
        height: 2em;
        border: $light_blue 1px solid;
        border-radius: 10px;
      }
      .title-input {
        width: 100%;
      }
      .tag-input {
        width: 45%;
      }
    }
  }

  .termAndTime {
    .time-inputs-wrap {
      .input-date {
        border: none;
      }
    }
  }
}
</style>
