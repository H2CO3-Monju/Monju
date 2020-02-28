<template>
  <div class="infoCard">
    <v-container>
      <v-card class="ml-2">
        <v-card-title class="pl-3 mb-0 font-weight-bold title" disabled>
          評価とレビュー
        </v-card-title>
        <evalution />
        <events />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import evalution from '@/components/ui/design/evaluationUI'
import events from '@/components/pages/event/event'
export default {
  components: {
    evalution,
    events
  }
}
</script>

<style lang="scss">
.infoCard {
  width: 100%;
  .title {
    color: #7994a7;
  }
}
</style>
