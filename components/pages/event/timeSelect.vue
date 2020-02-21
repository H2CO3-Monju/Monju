<template>
  <div class="timeSelect">
    <selectComponent
      ref="time_hour"
      :id="`${id}--timeHourSelect`"
      :name="'time-hour'"
      :isTime="true"
      :hasError="hasError"
      :contents="{
        0: { value: '00', text: '00' },
        1: { value: '01', text: '01' },
        2: { value: '02', text: '02' },
        3: { value: '03', text: '03' },
        4: { value: '04', text: '04' },
        5: { value: '05', text: '05' },
        6: { value: '06', text: '06' },
        7: { value: '07', text: '07' },
        8: { value: '08', text: '08' },
        9: { value: '09', text: '09' },
        10: { value: '10', text: '10' },
        11: { value: '11', text: '11' },
        12: { value: '12', text: '12' },
        13: { value: '13', text: '13' },
        14: { value: '14', text: '14' },
        15: { value: '15', text: '15' },
        16: { value: '16', text: '16' },
        17: { value: '17', text: '17' },
        18: { value: '18', text: '18' },
        19: { value: '19', text: '19' },
        20: { value: '20', text: '20' },
        21: { value: '21', text: '21' },
        22: { value: '22', text: '22' },
        23: { value: '23', text: '23' }
      }"
    />
    <p class="timeSelect__colon">:</p>
    <selectComponent
      ref="time_minutes"
      :id="`${id}--timeMinutesSelect`"
      :name="'time-minutes'"
      :isTime="true"
      :hasError="hasError"
      :contents="{
        0: { value: '00', text: '00' },
        1: { value: '05', text: '05' },
        2: { value: '10', text: '10' },
        3: { value: '15', text: '15' },
        4: { value: '20', text: '20' },
        5: { value: '25', text: '25' },
        6: { value: '30', text: '30' },
        7: { value: '35', text: '35' },
        8: { value: '40', text: '40' },
        9: { value: '45', text: '45' },
        10: { value: '50', text: '50' },
        11: { value: '55', text: '55' }
      }"
    />
  </div>
</template>

<script>
import selectComponent from '@/components/pages/event/selectComponent'

export default {
  components: {
    selectComponent
  },
  props: {
    id: {
      type: String,
      required: true
    },
    hasError: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    getValue() {
      const hourValue = this.$refs.time_hour.getValue()
      const minutesValue = this.$refs.time_minutes.getValue()
      const time = hourValue + ':' + minutesValue
      return time
    }
  }
}
</script>

<style lang="scss" scoped>
.timeSelect {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 30px;
  &__colon {
    margin: 0 3px;
    font-size: 1.2em;
    font-weight: bold;
  }
}
</style>
