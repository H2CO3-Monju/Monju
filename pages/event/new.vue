<template>
  <div class="bg">
    <div class="container">
      <h1>新規イベント作成</h1>
      <div class="mainContents-wrap">
        <div class="event-img-wrap">
          <div class="event-img">
            <label class="image-icon-wrap">
              <span id="image-icons-span" class="image-icons">
                <i
                  class="far fa-image image-icons-fontawesome"
                  aria-hidden="true"
                ></i>
              </span>
              <img id="preview" class="event-image" />
              <input
                id="eventImg"
                class="hidden"
                type="file"
                name="s_file"
                accept="image/*"
              />
            </label>
          </div>
        </div>

        <div class="title-tag">
          <div class="title-tag__title">
            <h2>タイトル</h2>
            <inputText
              :id="'title_input'"
              :rules="titleRules"
              :counter="255"
              :placeholder="'簡潔かつ目が惹かれるようなタイトルを！'"
            />
          </div>
          <!-- <div class="title-tag__tag">
            <h2>タグ</h2>
            <input
              id="tag_input"
              type="text"
              class="title-tag__input-title--tag lightblue-input"
              placeholder="入力してください"
              autocomplete="off"
            />
            <p><small>※タグの追加は5つまでです</small></p>
          </div> -->
          <tagWrap />
        </div>
      </div>

      <div class="termAndTime item">
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
          <small>
            ※時間は原則1時間〜５時間までです。延長は出来ないので、時間は多めに見積もって作成してください。
          </small>
        </p>
      </div>

      <div class="deadline item">
        <h2>締め切り</h2>
        <div class="time-input-wrap">
          <input type="date" />
          <input type="time" />
        </div>
      </div>

      <div class="event-type item">
        <h2>勉強会の種類</h2>
        <div @click="switchContent" class="event-type_inputs">
          <div>
            <label for="presentation_input">
              <input
                id="presentation_input"
                type="radio"
                name="event-type"
                checked
              />
              発表勉強会
            </label>
          </div>
          <div>
            <label for="communication_input">
              <input id="communication_input" type="radio" name="event-type" />
              交流勉強会
            </label>
          </div>
        </div>
      </div>

      <hr />

      <div v-if="isEventTypePresentation">
        <div class="entryFee item">
          <h2>参加費</h2>
          <div class="entryFee__inner">
            <select class="entryFee__inner-select lightblue-input" name="fee">
              <option value="100yen">100</option>
              <option value="200yen">200</option>
              <option value="300yen">300</option>
              <option value="400yen">400</option>
              <option value="500yen">500</option>
              <option value="600yen">600</option>
              <option value="700yen">700</option>
              <option value="800yen">800</option>
              <option value="900yen">900</option>
              <option value="1000yen">1000</option>
              <option value="1100yen">1100</option>
              <option value="1200yen">1200</option>
              <option value="1300yen">1300</option>
              <option value="1400yen">1400</option>
              <option value="1500yen">1500</option>
              <option value="1600yen">1600</option>
              <option value="1700yen">1700</option>
              <option value="1800yen">1800</option>
              <option value="1900yen">1900</option>
              <option value="2000yen">2000</option>
            </select>
            <i class="fab fa-product-hunt entryFee__inner-fontawesome"></i>
          </div>
          <p><small>※上限は2000円までです</small></p>
        </div>

        <div class="presenterSelect item">
          <h2>発表者の選択</h2>
          <input
            type="text"
            class="presenterSelect_input lightblue-input"
            placeholder="入力してください"
          />
          <p><small>※発表者の上限は10人までです</small></p>
        </div>

        <div class="fixed-member item">
          <h2>定員</h2>
          <div>
            <input
              id="fixed-member_input"
              type="number"
              class="fixed-member_input lightblue-input"
            />
            <label for="fixed-member_input">人</label>
          </div>
          <p><small>※発表勉強会の参加者の上限は10人です</small></p>
        </div>

        <div class="autoCloseText item">
          <p>
            <small>
              <span class="riceMark">＊</span>定員が締め切りまでに
              <input
                class="autoCloseText_input lightblue-input"
                type="number"
              />
              人集まらなかったら自動的にイベントを閉鎖する
            </small>
          </p>
        </div>
      </div>

      <div v-else>
        <div class="fixed-member item">
          <h2>定員</h2>
          <div>
            <input
              id="fixed-member_input"
              type="number"
              class="fixed-member_input lightblue-input"
            />
            <label for="fixed-member_input">人</label>
          </div>
          <p><small>※交流勉強会の参加者の上限は5人です</small></p>
        </div>

        <div class="autoCloseText item">
          <p>
            <small>
              <span class="riceMark">＊</span>定員が締め切りまでに
              <input
                class="autoCloseText_input lightblue-input"
                type="number"
              />
              人集まらなかったら自動的にイベントを閉鎖する
            </small>
          </p>
        </div>
      </div>

      <div class="details item">
        <h2>詳細</h2>
        <div class="details__inner">
          <ul class="details__inner-tabs">
            <li class="details__inner-tab--active">マークダウン</li>
            <li class="details__inner-tab">プレビュー</li>
          </ul>
        </div>
        <textarea class="details__inner-markdown" rows="20"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import inputText from '@/components/new/inputText'
import tagWrap from '@/components/new/tagWrap'
const hideIcon = () => {
  const icons = document.getElementById('image-icons-span')
  icons.classList.add('hidden')
}
const showImg = () => {
  const eventImg = document.getElementById('eventImg')
  eventImg.addEventListener('change', (e) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      document.getElementById('preview').setAttribute('src', e.target.result)
    }
    reader.readAsDataURL(e.target.files[0])
    hideIcon()
  })
}

export default {
  components: {
    inputText,
    tagWrap
  },
  data() {
    return {
      isEventTypePresentation: true,
      titleRules: [
        (v) => !!v || 'タイトルは必須項目です',
        (v) => v.length <= 255 || 'タイトルは255文字以内で入力してください。'
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      showImg()
    })
  },
  methods: {
    switchContent() {
      const inputs = document.getElementsByName('event-type')
      const isPresentation = inputs[0].checked
      if (isPresentation) {
        this.isEventTypePresentation = true
      } else {
        this.isEventTypePresentation = false
      }
    }
    // addTag() {
    //   const input = document.getElementById('tag_input')
    //   input.addEventListener('keydown', (e) => {
    //     if (e.keyCode !== 13) return
    //     const message = { message: input.value }
    //     this.tags.push(message)
    //   })
    // },
    // deleteTag(event) {
    //   const targetLi = event.target.parentNode
    //   const ul = targetLi.parentNode
    //   const liNodes = ul.querySelectorAll('li')
    //   const liArray = Array.from(liNodes)
    //   const targetIndex = liArray.findIndex((element) => element === targetLi)
    //   // tags配列のtargetIndex番目の要素から1つ目までを削除
    //   this.tags.splice(targetIndex, 1)
    // }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}
.bg {
  padding: 5vh 0;
  background-color: $_bg_color;
}
.container {
  width: 70%;
  height: 2000px;
  margin: 0 auto;
  padding: 50px 60px;
  border-radius: 20px;
  color: $_font_color;
  background-color: $_container_white;
  h1 {
    margin-bottom: 20px;
    font-size: 1.6em;
    font-weight: bold;
  }
  h2 {
    font-size: 1.12em;
    font-weight: bold;
  }
  .lightblue-input {
    padding-left: 0.5em;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    color: $_input_color;
    font-size: 1.12em;
    border: $_light_blue 1px solid;
    border-radius: 5px;
  }
  .mainContents-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    .event-img-wrap {
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 330px;
      margin-right: 40px;
      margin-bottom: 20px;
      color: $_light_blue;
      .event-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 320px;
        height: 213px;
        border: $_light_blue 3px dashed;
        .image-icon-wrap {
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          .image-icons {
            cursor: pointer;
            position: relative;
            &::after {
              position: absolute;
              top: -6px;
              right: -6px;
              font-size: 2em;
              font-family: 'Font Awesome 5 Free';
              font-weight: bold;
              text-shadow: 3px 3px 0 $_container_white,
                -3px -3px 0 $_container_white, -3px 3px 0 $_container_white,
                3px -3px 0 $_container_white, 0px 3px 0 $_container_white,
                0 -3px 0 $_container_white, -3px 0 0 $_container_white,
                -3px 0 0 $_container_white, 3px 0 0 $_container_white;
              content: '\f067';
            }
            .image-icons-fontawesome {
              font-size: 5em;
            }
          }
          .event-image {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: auto;
            width: auto;
            max-width: 100%;
            max-height: 100%;
            margin: auto;
          }
          .hidden {
            display: none;
          }
        }
      }
    }
    .title-tag {
      flex-grow: 1;
      flex-basis: 330px;
      margin-bottom: 20px;
    }
  }

  .item {
    margin-bottom: 20px;
  }

  .termAndTime,
  .deadline {
    h2 {
      margin-bottom: 5px;
    }
    input,
    select {
      margin: 0 5px 5px;
      padding: 6px 0;
      height: 24.8px;
      border: none;
      border-radius: 5px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      outline: none;
      background: $_keyRimePie;
      color: #fff;
      font-size: 0.96em;
      font-weight: bold;
      text-align: center;
    }
  }

  .event-type {
    .event-type_inputs {
      display: inline-flex;
      flex-direction: row;
      justify-content: space-around;
      margin-left: 5px;
      font-size: 0.96em;
    }
    label {
      cursor: pointer;
      margin-right: 15px;
    }
  }

  hr {
    border-top: $_light_blue 1px solid;
  }

  .entryFee {
    display: inline-block;
    h2 {
      margin-bottom: 5px;
    }
    &__inner {
      display: inline-flex;
      align-items: center;
      position: relative;
      margin: 0 5px 5px;
      &:before {
        z-index: 1;
        position: absolute;
        top: 0.8em;
        right: 2.3em;
        width: 0;
        height: 0;
        padding: 0;
        content: '';
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid $_font_color;
        pointer-events: none;
      }
    }
    &__inner-select {
      height: 2em;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      padding: 5px 38px 5px 6px;
      outline: none;
      color: $_input_color;
      text-align: center;
      background-color: $_container_white;
    }
    &__inner-fontawesome {
      margin-left: 0.3em;
      font-size: 1.3em;
    }
  }

  .presenterSelect {
    .presenterSelect_input {
      height: 2em;
      margin: 0 5px 5px;
    }
  }

  .fixed-member {
    .fixed-member_input {
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
    .autoCloseText_input {
      width: 50px;
      height: 1.4em;
    }
  }

  .details {
    h2 {
      margin-bottom: 5px;
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
}
</style>
