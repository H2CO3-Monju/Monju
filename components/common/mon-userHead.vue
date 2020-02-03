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
        <a class="st-userHeader_loginLink" href="#">イベント作成</a>
        <span class="pd-1"></span>

        <div class="st-userHead_point">
          {{ havePoint }}
          <i class="fab fa-product-hunt fa-lg"></i>
        </div>
        <span class="pd-1"></span>
        <a class="st-userHead_info" href="#">
          <i class="fas fa-bell fa-lg"></i>
        </a>
        <span class="pd-1"></span>
        <a class="st-userHead_meil" href="#">
          <i class="fas fa-envelope fa-lg"></i>
        </a>
        <span class="pd-1"></span>

        <div class="userCard">
          <img
            class="userIcon"
            src="~/assets/images/user.jpg"
            alt="user-icon"
          />
          {{ userName }}さん
          <i class="fas fa-caret-down fa-2x greenIcon"></i>
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
      userName: '涼雅'
    }
  }
}
</script>

<style lang="scss" scoped>
//ホームのGナビ
.st-userHeader {
  padding: 0 16px;
  background-color: #fff;
  border-top: 5px solid $_color-primary;
  box-shadow: 0px 0px 10px 0px rgba($color: #000000, $alpha: 0.4);

  .st-userHeader_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    max-width: 1080px;
    margin: 0 auto;

    //左の要素
    .st-userHeader_start {
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
      .st-userHeader_serch {
        position: relative;
        width: 200px;
        .fa {
          position: absolute;
          top: 6px;
          left: 9px;
          color: #aaa;
          font-weight: 900;
        }
        .st-userHeader_searchInput {
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
    .st-userHeader_end {
      display: flex;
      align-items: center;
      justify-content: center;

      .st-userHeader_loginLink {
        background-color: $_color-primary;
        color: $_color-white;
        border-radius: $_button-border-radius;
        border: 2px solid $_button-default-border;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: 0 16px;
        cursor: pointer;
      }

      .userCard {
        font-size: 1.1em;
        .userIcon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
