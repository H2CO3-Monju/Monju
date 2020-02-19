<template>
  <header class="st-Header .navbar">
    <div class="st-Header_container">
      <div class="st-Header_start">
        <!-- ロゴ -->
        <a class="logo mr-1" href="#">
          <img src="~/assets/images/logo_green.svg" alt="ロゴ" />
        </a>

        <!-- 検索バー -->
        <form class="st-Header_serch" action="#" method="get">
          <div class="control has-addons">
            <i class="fa fa-search"></i>
            <input
              class="st-Header_searchInput"
              placeholder="キーワードを入力"
              type="search"
              autocomplete="off"
              name="m"
            />
          </div>
        </form>
      </div>
      <div class="st-Header_end">
        <a class="st-Header_loginLink" href="#">サインイン</a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '~assets/scss/header.scss';
</style>
