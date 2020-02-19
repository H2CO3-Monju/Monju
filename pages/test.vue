<template>
  <v-container>
    <v-row class="vrow-test">
      <v-col xl="8" lg="8" md="8" sm="12" xs="12">
        <div class="test1"></div>
      </v-col>
      <v-col xl="4" lg="4" md="4" class="test-display2">
        <div class="test2"></div>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="12" xs="12" class="test-display3">
        <div class="test3"></div>
      </v-col>
    </v-row>

    <v-row>
      <v-col xl="8" lg="8" md="8" sm="12" xs="12">
        <div class="test4"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
// offsetは空白の要素の幅（margin）
// v-row、v-colは全てmargin: 12pxされる
.vrow-test {
  height: 312px;
}
.test1 {
  background: red;
  height: 300px;
}
.test2 {
  background: blue;
  height: 1000px;
}
.test3 {
  background: blue;
  height: 500px;
}
.test4 {
  background: yellow;
  height: 500px;
}
@media screen and (max-width: 960px) {
  .test-display2 {
    display: none;
  }
  .test-display3 {
    display: block;
  }
}
@media screen and (min-width: 960px) {
  .test-display2 {
    display: block;
  }
  .test-display3 {
    display: none;
  }
}
</style>
