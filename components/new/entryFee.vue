<template>
  <div class="entryFee">
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
</template>

<style lang="scss" scoped>
h2 {
  font-size: 1.12em;
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
</style>
