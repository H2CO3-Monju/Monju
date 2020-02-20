<template>
  <v-form
    ref="form"
    :style="styles"
    v-model="valid"
    @submit.prevent
    class="inptTextWrap"
    lazy-validation
  >
    <v-text-field
      ref="textField"
      v-model="value"
      :id="id"
      :class="[valid ? 'normalClass' : 'errorClass']"
      :rules="rules"
      :counter="counter"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :type="type"
      :max="max"
      :min="min"
      dense
      outlined
      solo
      required
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    rules: {
      type: Array,
      required: true
    },
    counter: {
      type: [Number, Boolean],
      default: false,
      required: false
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    autocomplete: {
      type: String,
      default: 'on',
      required: false
    },
    styles: {
      type: [Object, Boolean],
      default: false,
      required: false
    },
    type: {
      type: String,
      default: '',
      required: false
    },
    max: {
      type: [Number, Boolean],
      default: false,
      required: false
    },
    min: {
      type: [Number, Boolean],
      default: false,
      required: false
    }
  },
  data() {
    return {
      valid: false,
      value: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.changeInputColor()
    })
  },
  methods: {
    changeInputColor() {
      const input = document.getElementById(this.id)
      const inputWrap = input.parentNode
      const fieldsetWrap = inputWrap.parentNode
      const fieldset = fieldsetWrap.querySelector('fieldset')
      input.addEventListener('focus', (e) => {
        fieldset.classList.add('focusClass')
      })
      input.addEventListener('blur', (e) => {
        fieldset.classList.remove('focusClass')
        this.checkValidate()
      })
    },
    checkValidate() {
      this.$refs.form.validate()
    },
    returnIsProper() {
      this.checkValidate()
      return this.$refs.form.value
    },
    returnValue() {
      return this.$refs.textField.value
    },
    deleteValue() {
      this.value = ''
    }
  }
}
</script>

<style lang="scss">
.inptTextWrap {
  .focusClass {
    border-color: #42a5f5 !important;
  }
  .v-text-field--outlined .v-input__control .v-input__slot {
    margin-top: -12px !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }
  .v-text-field__details {
    padding: 0 !important;
  }
  .v-text-field--outlined .v-input__control .v-input__slot fieldset {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    color: $_input_color;
    border-radius: 5px;
    transition-property: border-color;
    transition-duration: 200ms;
    transition-timing-function: ease;
  }
  .normalClass.v-text-field--outlined
    .v-input__control
    .v-input__slot
    fieldset {
    border-color: $_light_blue;
  }
  .errorClass.v-text-field--outlined .v-input__control .v-input__slot fieldset {
    border-color: #ff5252 !important;
  }
}
</style>
