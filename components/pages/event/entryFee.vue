<template>
  <div class="entryFee">
    <h2>参加費</h2>
    <div class="entryFee__inner">
      <select
        :id="id"
        class="entryFee__inner-select lightblue-input"
        name="fee"
      >
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
        <option value="600">600</option>
        <option value="700">700</option>
        <option value="800">800</option>
        <option value="900">900</option>
        <option value="1000">1000</option>
        <option value="1100">1100</option>
        <option value="1200">1200</option>
        <option value="1300">1300</option>
        <option value="1400">1400</option>
        <option value="1500">1500</option>
        <option value="1600">1600</option>
        <option value="1700">1700</option>
        <option value="1800">1800</option>
        <option value="1900">1900</option>
        <option value="2000">2000</option>
      </select>
      <i class="fab fa-product-hunt entryFee__inner-fontawesome"></i>
    </div>
    <p><small>※上限は2000円までです</small></p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    returnValue() {
      const select = document.getElementById(this.id)
      const options = Array.from(select.options)
      const selected = options.find((option) => option.selected === true)
      return selected.value
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.17em;
  font-weight: bold;
}
.entryFee {
  display: inline-block;
  margin-bottom: 20px;
  &__inner {
    display: inline-flex;
    align-items: center;
    position: relative;
    margin: 5px 5px;
    &:before {
      z-index: 1;
      position: absolute;
      top: 1em;
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
</style>
