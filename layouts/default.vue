<template>
  <v-app>
    <mon-head />
    <nuxt />
    <mon-foot />
  </v-app>
</template>

<script>
import monHead from '@/components/common/mon-userHead'
import monFoot from '@/components/common/mon-foot'

export default {
  components: {
    monHead,
    monFoot
  }
}
</script>
