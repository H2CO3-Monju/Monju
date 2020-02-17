<template>
  <div class="bg">
    <div class="container">
      <h1>新規イベント作成</h1>
      <div class="mainContents-wrap">
        <eventImage />

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
        <fixedMember :small="'※発表勉強会の参加者の上限は10人です'" />
      </div>

      <div v-else>
        <fixedMember :small="'※交流勉強会の参加者の上限は5人です'" />
      </div>

      <detailsComponent />
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
import fixedMember from '@/components/new/fixedMember'
import detailsComponent from '@/components/new/detailsComponent'
import eventImage from '@/components/new/eventImage'

export default {
  components: {
    inputText,
    tagWrap,
    inputDate,
    selectComponent,
    timeSelect,
    entryFee,
    presenterSelect,
    fixedMember,
    detailsComponent,
    eventImage
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
}
</style>
