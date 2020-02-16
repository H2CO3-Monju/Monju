<template>
  <div class="timeSelect">
    <selectComponent
      :name="'time-hour'"
      :isTime="true"
      :contents="{
        0: { value: 'zero', text: '00' },
        1: { value: 'one', text: '01' },
        2: { value: 'two', text: '02' },
        3: { value: 'three', text: '03' },
        4: { value: 'four', text: '04' },
        5: { value: 'five', text: '05' },
        6: { value: 'six', text: '06' },
        7: { value: 'seven', text: '07' },
        8: { value: 'eight', text: '08' },
        9: { value: 'nine', text: '09' },
        10: { value: 'ten', text: '10' },
        11: { value: 'eleven', text: '11' },
        12: { value: 'twelve', text: '12' },
        13: { value: 'thirteen', text: '13' },
        14: { value: 'fourteen', text: '14' },
        15: { value: 'fifteen', text: '15' },
        16: { value: 'sixteen', text: '16' },
        17: { value: 'seventeen', text: '17' },
        18: { value: 'eighteen', text: '18' },
        19: { value: 'nineteen', text: '19' },
        20: { value: 'twenty', text: '20' },
        21: { value: 'twenty-one', text: '21' },
        22: { value: 'twenty-two', text: '22' },
        23: { value: 'twenty-three', text: '23' }
      }"
    />
    <p class="timeSelect__colon">:</p>
    <selectComponent
      :name="'time-minutes'"
      :isTime="true"
      :contents="{
        0: { value: 'zero', text: '00' },
        1: { value: 'five', text: '05' },
        2: { value: 'ten', text: '10' },
        3: { value: 'fifteen', text: '15' },
        4: { value: 'twenty', text: '20' },
        5: { value: 'twenty-five', text: '25' },
        6: { value: 'thirty', text: '30' },
        7: { value: 'thirty-five', text: '35' },
        8: { value: 'fourty', text: '40' },
        9: { value: 'fourty-five', text: '45' },
        10: { value: 'fifty', text: '50' },
        11: { value: 'fifty-five', text: '55' }
      }"
    />
  </div>
</template>

<script>
import selectComponent from '@/components/new/selectComponent'

export default {
  components: {
    selectComponent
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
