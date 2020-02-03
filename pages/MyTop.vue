<template>
  <div class="allWrap">
    <div class="userInfo columns">
      <div class="userInfo-userIcon column is-one-quarter">
        <div class="userImg">
          <img src="~/assets/images/user.jpg" alt="aaa" />
        </div>
        <div class="Icons">
          <a><i class="fab fa-twitter-square fa-lg fa-fw"></i></a>
          <a><i class="fab fa-facebook-square fa-lg fa-fw"></i></a>
          <a><i class="fab fa-github-square fa-lg fa-fw"></i></a>
        </div>
      </div>

      <div class="userInfo-userData column is-harf">
        <div class="userInfo-userName">
          {{ userName }}
          <span>さん</span>
        </div>
        <div class="userInfo-userFollowing">
          <a href="#">
            {{ following }}
            <span>フォロー</span>
          </a>
        </div>
        <div class="userInfo-userFollower">
          <a href="#">
            {{ follower }}
            <span>フォロワー</span>
          </a>
        </div>
        <div class="userInfo-userGreed">
          <p>
            こんにちは私の名前は剛田武です。最近はHTMLについて熱心に勉強しています。
            機会があればPythonなどのプログラミングで人工知能でも作りたいです。
          </p>
        </div>
      </div>

      <div class="userInfo-userPlans column is-one-quarter">
        <h3>ここにプランが入ります</h3>
      </div>
    </div>

    <section class="userEvaluation section">
      <div class="tabs is-boxed">
        <ul>
          <li v-bind:class="{ 'is-active': isActive == 'topAnnounce' }">
            <a v-on:click="isActive = 'topAnnounce'">発表した勉強会</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topOpen' }">
            <a v-on:click="isActive = 'topOpen'">開催した勉強会</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topJoin' }">
            <a v-on:click="isActive = 'topJoin'">参加した勉強会</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topLike' }">
            <a v-on:click="isActive = 'topLike'">いいねした勉強会</a>
          </li>
        </ul>
      </div>
      <div class="tab-contents">
        <div class="content">
          <topAnnounce v-if="isActive == 'topAnnounce'" />
        </div>
        <div class="content">
          <topOpen v-if="isActive == 'topOpen'" />
        </div>
        <div class="content">
          <topJoin v-if="isActive == 'topJoin'" />
        </div>
        <div class="content">
          <topLike v-if="isActive == 'topLike'" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="js">
import topAnnounce from '@/components/MyPage/top-Announce'
import topOpen from '@/components/MyPage/top-Open'
import topLike from '@/components/MyPage/top-Like'
import topJoin from '@/components/MyPage/top-Join'

export default {
  components: {
    topAnnounce,
    topOpen,
    topLike,
    topJoin
  },
  data() {
    return {
      userName: '剛田武',
      following: '100',
      follower: '1600',
      isActive: 'topAnnounce'
    }
  }
}
</script>

<style lang="scss">
.userInfo {
  width: 1180px;
  height: auto;
  margin: 0 auto;
  .userInfo-userIcon {
    width: 20%;
    height: 25%;
    margin: 0 auto;
    img {
      overflow: hidden;
      width: 125px;
      height: 125px;
      border-radius: 50%;
    }
    .Icons {
      justify-content: space-around;
    }
  }
  .userInfo-userData {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .userInfo-userName {
      font-size: 1.6em;
      color: $_color-text-blueBlack;
      border-bottom: 5px solid $_color-text-blueBlack;
    }
    .userInfo-userGreed {
      background: $_border-color-lighter;
      margin-top: 15px;
      padding: 15px;
      box-shadow: 10px rgba($color: #000000, $alpha: 0.4);
    }
  }
}
</style>
