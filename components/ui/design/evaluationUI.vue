<template>
  <v-row class="pl-10">
    <v-col xl="2" lg="2" md="2" sm="2" xs="2">
      <v-card class="ev-card" color="#C4D929" width="80px" height="80">
        <span class="evalution">
          {{ evalution }}
        </span>
      </v-card>
    </v-col>
    <v-col xl="3" lg="3" md="3" sm="3" xs="3">
      <span class="allCnt">
        5段階評価中
      </span>
    </v-col>
    <v-col xl="3" lg="3" md="3" sm="3" xs="3">
      <span class="review_Cnt">
        {{ reviewCnt }}
        件のレビュー
      </span>
    </v-col>
    <v-col xl="3" lg="3" md="3" sm="3" xs="3" class="mr-1">
      <v-row>
        <small>
          ★★★★★
        </small>
        <v-progress-linear
          value="20"
          color="#9CD929"
          background-color="#D5D5D5"
        ></v-progress-linear>
      </v-row>
      <v-row>
        <small>
          ★★★★
        </small>
        <v-progress-linear
          value="40"
          color="#C4D929"
          background-color="#D5D5D5"
        ></v-progress-linear>
      </v-row>
      <v-row>
        <small>
          ★★★
        </small>
        <v-progress-linear
          value="50"
          color="#F0E222"
          background-color="#D5D5D5"
        ></v-progress-linear>
      </v-row>
      <v-row>
        <small>
          ★★
        </small>
        <v-progress-linear
          value="60"
          color="#F4A230"
          background-color="#D5D5D5"
        ></v-progress-linear>
      </v-row>
      <v-row>
        <small>
          ★
        </small>
        <v-progress-linear
          value="70"
          color="#F34573"
          background-color="#D5D5D5"
        ></v-progress-linear>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      evalution: '4.5',
      reviewCnt: '1234'
    }
  }
}
</script>

<style lang="scss" scope>
.ev-card {
  text-align: center;
  line-height: 80px;
  .evalution {
    color: #fff;
    font-size: 40px;
  }
}
.allCnt {
  font-size: 22px;
  color: #707070;
}
.review_Cnt {
  font-size: 16px;
  color: #707070;
}
</style>
