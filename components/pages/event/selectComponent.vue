<template>
  <div
    :class="[isTime ? 'upDownTriangle' : 'downTriangle', 'select-component']"
  >
    <select class="select-component__inner" :name="name">
      <option
        :value="content.value"
        :key="index"
        v-for="(content, index) in contents"
      >
        {{ content.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    contents: {
      type: Object,
      required: true
    },
    isTime: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.select-component {
  position: relative;
  height: 30px;
  &__inner {
    cursor: pointer;
    position: relative;
    padding-top: 4px;
    padding-bottom: 2px;
    padding-left: 6px;
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

.upDownTriangle {
  &:before {
    z-index: 1;
    position: absolute;
    top: 16px;
    right: 7px;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid #fff;
    pointer-events: none;
  }
  &:after {
    z-index: 1;
    position: absolute;
    top: 7px;
    right: 7px;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 6px solid #fff;
    pointer-events: none;
  }
  .select-component {
    &__inner {
      padding-right: 18px;
    }
  }
}
.downTriangle {
  &:before {
    z-index: 1;
    position: absolute;
    top: 12px;
    right: 6px;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 5.5px solid transparent;
    border-right: 5.5px solid transparent;
    border-top: 5.5px solid #fff;
    pointer-events: none;
  }
  .select-component {
    &__inner {
      padding-right: 24px;
    }
  }
}
</style>
