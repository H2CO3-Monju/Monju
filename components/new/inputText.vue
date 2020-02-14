<template>
  <v-form v-model="valid" lazy-validation>
    <v-text-field
      v-model="title"
      :class="[valid ? 'normalClass' : 'errorClass']"
      :rules="titleRules"
      :counter="255"
      placeholder="簡潔かつ目が惹かれるようなタイトルを！"
      dense
      outlined
      solo
      required
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      title: '',
      titleRules: [
        (v) => !!v || 'タイトルは必須項目です',
        (v) => v.length < 255 || 'タイトルは255文字以内で入力してください。'
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.test()
    })
  },
  methods: {
    test() {
      const inputWrap = document.getElementsByClassName('v-text-field__slot')[0]
      const input = inputWrap.querySelector('input')
      const fieldsetWrap = inputWrap.parentNode
      const fieldset = fieldsetWrap.querySelector('fieldset')
      input.addEventListener('focus', (e) => {
        fieldset.classList.add('focusClass')
      })
      input.addEventListener('blur', (e) => {
        fieldset.classList.remove('focusClass')
      })
    }
  }
}
</script>

<style lang="scss">
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
.normalClass.v-text-field--outlined .v-input__control .v-input__slot fieldset {
  border-color: $_light_blue;
}
.errorClass.v-text-field--outlined .v-input__control .v-input__slot fieldset {
  border-color: #ff5252 !important;
}
// fieldset=border,.v-input__slot=box-shadow
</style>
