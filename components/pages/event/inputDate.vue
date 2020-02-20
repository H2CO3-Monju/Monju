<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <div class="inputDateWrap">
        <v-text-field
          v-on="on"
          v-model="date"
          readonly
          dense
          outlined
          solo
        ></v-text-field>
      </div>
    </template>
    <v-date-picker v-model="date" color="#BBC61D" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn @click="menu = false" text color="#BBC61D">Cancel</v-btn>
      <v-btn @click="$refs.menu.save(date)" text color="#BBC61D">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  })
}
</script>

<style lang="scss">
.v-date-picker-table table th {
  text-align: center !important;
}
.inputDateWrap {
  position: relative;
  height: 30px;
  width: 130px;
  .v-text-field--outlined .v-input__control .v-input__slot input {
    cursor: pointer;
    color: #fff;
    font-weight: bold;
  }
  .v-text-field--outlined .v-input__control .v-input__slot {
    margin-top: -11px !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }
  .v-text-field__details {
    padding: 0 !important;
  }
  .v-text-field--outlined .v-input__control .v-input__slot fieldset {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    background-color: $_keyRimePie;
    border: none;
    border-radius: 5px;
    transition-property: border-color;
    transition-duration: 200ms;
    transition-timing-function: ease;
  }
  &:before {
    z-index: 1;
    position: absolute;
    top: 12px;
    right: 12px;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 5.5px solid transparent;
    border-right: 5.5px solid transparent;
    border-top: 5.5px solid #fff;
    pointer-events: none;
  }
}
</style>
