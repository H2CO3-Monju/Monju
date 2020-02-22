<template>
  <div class="infoCard">
    <v-container>
      <v-card class="ml-2">
        <v-title class="pl-3">
          評価とレビュー
        </v-title>
        <evalution />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import evalution from '@/components/ui/design/evaluationUI'
export default {
  components: {
    evalution
  }
}
</script>

<style lang="scss">
.infoCard {
  width: 100%;
}
</style>
