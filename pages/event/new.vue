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

          <tagWrap />
        </div>
      </div>

      <div class="termAndTime item">
        <h2>期間と日時</h2>
        <div class="termAndTime__inputs-wrap">
          <inputDate />
          <timeSelect />
          <selectComponent
            :name="'hour'"
            :contents="{
              0: { value: 'one-hour', text: '1時間' },
              1: { value: 'two-hour', text: '2時間' },
              2: { value: 'three-hour', text: '3時間' },
              3: { value: 'four-hour', text: '4時間' },
              4: { value: 'five-hour', text: '5時間' }
            }"
          />
        </div>
        <p>
          <small>
            ※時間は原則1時間〜５時間までです。延長は出来ないので、時間は多めに見積もって作成してください。
          </small>
        </p>
      </div>

      <div class="deadline item">
        <h2>締め切り</h2>
        <div class="deadline__inputs-wrap">
          <inputDate />
          <timeSelect />
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
        <entryFee />

        <presenterSelect />

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
import inputDate from '@/components/new/inputDate'
import selectComponent from '@/components/new/selectComponent'
import timeSelect from '@/components/new/timeSelect'
import entryFee from '@/components/new/entryFee'
import presenterSelect from '@/components/new/presenterSelect'

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
    tagWrap,
    inputDate,
    selectComponent,
    timeSelect,
    entryFee,
    presenterSelect
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

  .termAndTime {
    &__inputs-wrap {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: center;
      max-width: 330px;
      margin-top: 5px;
    }
  }

  .deadline {
    &__inputs-wrap {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: center;
      max-width: 242.71px;
      margin-top: 5px;
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
