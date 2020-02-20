<template>
  <div class="userHeader">
    <v-app-bar
      :elevation="elevationHead"
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

      <eventcreation :text="'イベントを作成'" />

      <div class="pl-5">
        {{ havePoint }}
        <v-icon>fab fa-product-hunt fa-lg</v-icon>
      </div>

      <v-btn text icon>
        <v-icon>fas fa-bell</v-icon>
      </v-btn>

      <v-btn text icon>
        <v-icon>fas fa-envelope</v-icon>
      </v-btn>

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <v-avatar class="mr-2" color="teal" size="32">
                <img
                  class="userIcon"
                  src="~/assets/images/user.jpg"
                  alt="user-icon"
                />
              </v-avatar>
              <span class="userName">
                {{ userName }}
                <small>さん</small>
              </span>
              <v-icon class="pl-2" color="#C4D929">fas fa-caret-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <nuxt-link to="/mytop">マイページ</nuxt-link>
            </v-list-item>
            <v-list-item>
              <nuxt-link to="/setup/setting">設定</nuxt-link>
            </v-list-item>
            <v-list-item>
              <nuxt-link to="/info/info">お知らせ</nuxt-link>
            </v-list-item>
            <v-list-item>
              <nuxt-link to="/info/qa">ヘルプ</nuxt-link>
            </v-list-item>
            <v-list-item>
              <span>ログアウト</span>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="js">
import searchInput from '@/components/ui/inputs/searchBar'
import eventcreation from '@/components/ui/btns/event_creation'
export default {
  components: {
    searchInput,
    eventcreation
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
