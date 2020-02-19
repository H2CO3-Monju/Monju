<template>
  <v-app>
    <mon-head />
    <nuxt />
    <mon-foot />
  </v-app>
</template>

<script>
import monHead from '@/components/layouts/mon-userHead'
import monFoot from '@/components/layouts/mon-foot'

export default {
  components: {
    monHead,
    monFoot
  }
}
</script>
