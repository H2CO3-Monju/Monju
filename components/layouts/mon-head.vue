<template>
  <div class="userHeader">
    <v-app-bar
      dense
      width="100%"
      height="56px"
      style="background: #fff;"
      class="userHeader_container"
    >
      <!-- ロゴ -->
      <v-img
        :src="require('@/assets/images/logo_green.svg')"
        class="navbar_logo"
        max-width="125px"
      >
      </v-img>

      <searchInput class="pd-1" />

      <v-spacer></v-spacer>

      <nuxtlinkButton :path="'/login'" :text="'ログイン'" />
    </v-app-bar>
  </div>
</template>

<script lang="js">
import searchInput from '@/components/ui/inputs/searchBar'
import nuxtlinkButton from '@/components/ui/btns/nuxtlinkButton'
export default {
  components: {
    searchInput,
    nuxtlinkButton
  },
  data() {
    return {
      havePoint: '1000',
      userName: '五文字以上'
    }
  }
}
</script>

<style lang="scss" scoped>
.userHeader {
  border-top: 5px solid $_color-primary;
}
</style>
