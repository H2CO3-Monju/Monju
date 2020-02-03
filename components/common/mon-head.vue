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
//ホームのGナビ
.st-Header {
  padding: 0 16px;
  background-color: #fff;
  border-top: 5px solid $_color-primary;
  box-shadow: 0 1px 10px #707070;

  .st-Header_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;

    //左の要素
    .st-Header_start {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      position: relative;

      //ロゴの設定
      .logo {
        display: flex;
        align-items: center;
        margin-right: 8px;
        img {
          width: auto;
          height: 50px;
        }
      }

      //ホーム内検索フォームの設定
      .st-Header_serch {
        position: relative;
        width: 200px;
        .fa {
          position: absolute;
          top: 6px;
          left: 9px;
          color: #aaa;
          font-weight: 900;
        }
        .st-Header_searchInput {
          width: 100%;
          height: 32px;
          border: none;
          border-radius: 4px;
          background-color: #fff;
          font-size: 16px;
          box-shadow: inset 0 1px 2px #ccc;
          padding-left: 32px;
          padding-right: 8px;
          -webkit-appearance: textfield;
          -moz-appearance: textfield;
          appearance: textfield;
        }
      }
    }

    //右の要素
    .st-Header_end {
      display: flex;
      align-items: center;
      justify-content: center;

      .st-Header_loginLink {
        font-size: 1.2rem;
        color: $_color-text-primary;
        border-radius: $_button-border-radius;
        border: 2px solid $_button-default-border;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: 0 16px;
        cursor: pointer;
        transition: background-color 0.8s ease-in-out;
      }
    }
  }
}
</style>
