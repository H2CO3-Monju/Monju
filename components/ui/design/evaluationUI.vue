<template>
  <v-row class="pl-10">
    <v-col xl="2" lg="2" md="2" sm="2" xs="2">
      <v-card class="ev-card" color="#C4D929" width="80px" height="80">
        <span class="evalution">
          {{ evalution }}
        </span>
      </v-card>
    </v-col>
    <v-col xl="3" lg="3" md="4" sm="4" xs="4">
      <span class="allCnt">
        5段階評価中
      </span>
    </v-col>
    <v-col xl="3" lg="3" md="4" sm="4" xs="4">
      <span class="review_Cnt">
        {{ reviewCnt }}
        件のレビュー
      </span>
    </v-col>
    <v-col xl="3" lg="3" md="12" sm="12" xs="12" class="mr-1">
      <evgraph />
    </v-col>
  </v-row>
</template>

<script>
import evgraph from '@/components/ui/design/ev-graph'
export default {
  components: {
    evgraph
  },
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
