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
              ref="titleInput"
              :id="'title_input'"
              :rules="titleRules"
              :counter="255"
              :placeholder="'簡潔かつ目が惹かれるようなタイトルを！'"
            />
          </div>

          <tagWrap ref="tagWrap" />
        </div>
      </div>

      <div class="termAndTime item">
        <h2>開催日時と期間</h2>
        <div class="termAndTime__inputs-wrap">
          <inputDate
            ref="termAndTime_date"
            :id="'termAndTime__inputDate'"
            :hasError="!!openDateErrorMsg"
          />
          <timeSelect
            ref="termAndTime_hour_minutes"
            :id="'termAndTime'"
            :hasError="!!openDateErrorMsg"
          />
          <selectComponent
            ref="allotedTime"
            :id="'termAndTime__allotedTime'"
            :name="'allotedTime'"
            :hasError="!!openDateErrorMsg"
            :contents="{
              0: { value: '1', text: '1時間' },
              1: { value: '2', text: '2時間' },
              2: { value: '3', text: '3時間' },
              3: { value: '4', text: '4時間' },
              4: { value: '5', text: '5時間' }
            }"
          />
        </div>
        <p v-if="!!openDateErrorMsg" class="termAndTime__errorMsg">
          <small>{{ openDateErrorMsg }}</small>
        </p>
        <p>
          <small>
            ※時間は原則1時間〜５時間までです。延長は出来ないので、時間は多めに見積もって作成してください。
          </small>
        </p>
      </div>

      <div class="deadline item">
        <h2>締め切り</h2>
        <div class="deadline__inputs-wrap">
          <inputDate
            ref="deadline_date"
            :id="'deadline__inputDate'"
            :hasError="!!deadlineDateErrorMsg"
          />
          <timeSelect
            ref="deadline_hour_minutes"
            :id="'deadline'"
            :hasError="!!deadlineDateErrorMsg"
          />
          <p v-if="!!deadlineDateErrorMsg" class="deadline__errorMsg">
            <small>{{ deadlineDateErrorMsg }}</small>
          </p>
        </div>
      </div>

      <div class="event-type item">
        <h2>勉強会の種類</h2>
        <div class="event-type_inputs">
          <div>
            <label for="presentation_input">
              <input
                id="presentation_input"
                @click="switchContent"
                type="radio"
                name="event-type"
                checked
              />
              発表勉強会
            </label>
          </div>
          <div>
            <label for="communication_input">
              <input
                id="communication_input"
                @click="switchContent"
                type="radio"
                name="event-type"
              />
              交流勉強会
            </label>
          </div>
        </div>
      </div>

      <hr />

      <div v-if="isEventTypePresentation">
        <entryFee />
        <presenterSelect ref="presenterSelect" />
        <fixedMember
          ref="fixedMember"
          :max="10"
          :small="'※発表勉強会の参加者の上限は10人です'"
        />
      </div>

      <div v-else>
        <fixedMember
          ref="fixedMember"
          :max="5"
          :small="'※交流勉強会の参加者の上限は5人です'"
        />
      </div>

      <detailsComponent />

      <buttonComponent
        @btnClick="checkError"
        :needsEvent="true"
        :text="'イベントを作成する'"
      />
    </div>
  </div>
</template>

<script>
import inputText from '@/components/pages/event/inputText'
import tagWrap from '@/components/pages/event/tagWrap'
import inputDate from '@/components/pages/event/inputDate'
import selectComponent from '@/components/pages/event/selectComponent'
import timeSelect from '@/components/pages/event/timeSelect'
import entryFee from '@/components/pages/event/entryFee'
import presenterSelect from '@/components/pages/event/presenterSelect'
import fixedMember from '@/components/pages/event/fixedMember'
import detailsComponent from '@/components/pages/event/detailsComponent'
import eventImage from '@/components/pages/event/eventImage'
import buttonComponent from '@/components/ui/btns/buttonComponent'

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
    eventImage,
    buttonComponent
  },
  data() {
    return {
      isEventTypePresentation: true,
      titleRules: [
        (v) => !!v || 'タイトルは必須項目です',
        (v) => v.length <= 255 || 'タイトルは255文字以内で入力してください。'
      ],
      openDateErrorMsg: '',
      deadlineDateErrorMsg: ''
    }
  },
  updated() {
    this.$refs.fixedMember.deleteValue()
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
      // この処理ではv-ifでfixedMemberが切り替わる前のcssを元に戻す
      // updatedでv-else後にcssを適用する
      this.$refs.fixedMember.deleteValue()
    },
    getDateType(yyyymmdd, hhmm) {
      const date = new Date(yyyymmdd + ' ' + hhmm)
      return date
    },
    formatDate(date) {
      const y = date.getFullYear()
      let mo = date.getMonth() + 1
      let d = date.getDate()
      let h = date.getHours()
      let mi = date.getMinutes()
      if (mo < 10) mo = '0' + mo
      if (d < 10) d = '0' + d
      if (h < 10) h = '0' + h
      if (mi < 10) mi = '0' + mi
      return y + '-' + mo + '-' + d + ' ' + h + ':' + mi
    },
    checkOpenDate(openDate, hour, minutes, now) {
      // hourではなくminutesにすることで30分などの細かい調整が可能になる(0.5hは0hとして扱われるため)
      const nowPlusMinutes = new Date().setMinutes(now.getMinutes() + minutes)
      const nowPlus1y = new Date().setFullYear(now.getFullYear() + 1)
      if (openDate < nowPlusMinutes) {
        this.openDateErrorMsg = `開催時間は現在時刻の${hour}時間後から有効です。`
      } else if (openDate > nowPlus1y) {
        let maxDate = new Date(nowPlus1y)
        maxDate = this.formatDate(maxDate)
        this.openDateErrorMsg = `開催時間は${maxDate}以前に設定してください。`
      } else {
        this.openDateErrorMsg = ''
      }
    },
    chackDeadlineDate(openDate, hour, minutes, now, deadlineDate) {
      // hourではなくminutesにすることで30分などの細かい調整が可能になる(0.5hは0hとして扱われるため)
      const nowPlusMinutes = new Date().setMinutes(
        now.getMinutes() + minutes / 2
      )
      const tempOpenDate = new Date(openDate) // new Dateをしないと参照渡しになる
      const openDateMinusMinutes = tempOpenDate.setMinutes(
        openDate.getMinutes() - minutes / 2
      )
      if (deadlineDate < nowPlusMinutes) {
        this.deadlineDateErrorMsg = `締め切り日時は現在時刻の${hour /
          2}時間後から有効です。`
      } else if (openDate < deadlineDate) {
        this.deadlineDateErrorMsg = '締め切り日時が開催日時を過ぎています。'
      } else if (openDateMinusMinutes < deadlineDate) {
        this.deadlineDateErrorMsg = `締め切り日時は開催日時の${hour /
          2}時間以上前に設定してください。`
      } else {
        this.deadlineDateErrorMsg = ''
      }
    },
    checkDate() {
      const now = new Date()
      const hour = 6
      const minutes = 60 * hour
      const openDate = this.getDateType(
        this.$refs.termAndTime_date.getValue(), // yyyymmdd
        this.$refs.termAndTime_hour_minutes.getValue() // hhmm
      )
      const deadlineDate = this.getDateType(
        this.$refs.deadline_date.getValue(), // yyyymmdd
        this.$refs.deadline_hour_minutes.getValue() // hhmm
      )

      this.checkOpenDate(openDate, hour, minutes, now)
      this.chackDeadlineDate(openDate, hour, minutes, now, deadlineDate)
    },
    async checkError() {
      // コンポーネント内でasync/awaitは機能しないためこちらで記述
      await this.$refs.titleInput.checkValidate()
      await this.$refs.fixedMember.checkComponentValidate()
      await this.$refs.tagWrap.checkComponentValidate()
      await this.$refs.presenterSelect.checkComponentValidate()
      console.log('titleInput: ', this.$refs.titleInput.returnIsProper())
      console.log('fixedMember: ', this.$refs.fixedMember.returnIsProper())
      console.log('tagWrap: ', this.$refs.tagWrap.returnIsProper())
      console.log('presenterSelect: ', this.$refs.tagWrap.returnIsProper())
      // const allotedTime = this.$refs.allotedTime.getValue()
      this.checkDate()
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}
.bg {
  background-color: $_bg_color;
}
@media screen and (max-width: 600px) {
  .container {
    width: 95%;
  }
  .bg {
    padding: 1vh 0;
  }
}
@media screen and (min-width: 600px) {
  .container {
    width: 70%;
  }
  .bg {
    padding: 5vh 0;
  }
}
.container {
  height: auto;
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
    font-size: 1.17em;
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
    &__errorMsg {
      margin-bottom: 0;
      color: $_error_color;
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
    &__errorMsg {
      color: $_error_color;
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
