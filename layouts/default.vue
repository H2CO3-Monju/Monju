<template>
  <v-app>
    <mon-head />
    <nuxt />
    <mon-foot />
  </v-app>
</template>

<script>
import monHead from '@/components/common/mon-head'
import monFoot from '@/components/common/mon-foot'

export default {
  components: {
    monHead,
    monFoot
  }
}
</script>
