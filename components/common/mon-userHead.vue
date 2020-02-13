<template>
  <header class="st-userHeader .navbar is-black">
    <div class="st-userHeader_container">
      <div class="st-userHeader_start navbar-brand">
        <!-- ロゴ -->
        <a class="logo navbar-item" href="#">
          <img src="~/assets/images/logo_green.svg" alt="ロゴ" />
        </a>

        <!-- 検索バー -->
        <form class="st-userHeader_serch" action="#" method="get">
          <div class="control has-addons">
            <i class="fa fa-search"></i>
            <input
              class="st-userHeader_searchInput"
              placeholder="キーワードを入力"
              type="search"
              autocomplete="off"
              name="m"
            />
          </div>
        </form>
      </div>

      <div class="st-userHeader_end">
        <nuxt-link class="st-userHeader_Link" to="/event/new">
          <button class="button">
            イベント作成
          </button>
        </nuxt-link>
        <span class="pd-1"></span>

        <div class="st-userHead_point">
          {{ havePoint }}
          <i class="fab fa-product-hunt fa-lg"></i>
        </div>
        <span class="pd-1"></span>

        <nuxt-link class="st-userHead_info" to="/">
          <i class="fas fa-bell fa-lg"></i>
        </nuxt-link>
        <span class="pd-1"></span>

        <nuxt-link class="st-userHead_meil" to="/">
          <i class="fas fa-envelope fa-lg"></i>
        </nuxt-link>
        <span class="pd-1"></span>

        <div class="userCard dropdown" :class="{ 'is-active': isActive }">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu2"
              @click="isActive = !isActive"
            >
              <img
                class="userIcon"
                src="~/assets/images/user.jpg"
                alt="user-icon"
              />
              <span class="userName">
                {{ userName }}
                <small>さん</small>
              </span>
              <i class="fas fa-caret-down fa-lg greenIcon"></i>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu2" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <nuxt-link to="/mytop">マイページ</nuxt-link>
              </div>
              <div class="dropdown-item">
                <nuxt-link to="/SetUp/setting-Pro">設定</nuxt-link>
              </div>
              <div class="dropdown-item">
                <nuxt-link to="/info/info">お知らせ</nuxt-link>
              </div>
              <div class="dropdown-item">
                <nuxt-link to="/info/qa">ヘルプ</nuxt-link>
              </div>
              <div class="dropdown-item">
                <span>ログアウト</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      havePoint: '1000',
      userName: '五文字以上',
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/header.scss';
</style>
