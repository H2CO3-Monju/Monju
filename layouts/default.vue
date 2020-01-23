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
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
