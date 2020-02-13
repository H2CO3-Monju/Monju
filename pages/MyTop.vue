<template>
  <div class="allWrap pd-2">
    <div class="userInfo columns">
      <div class="column is-two-thirds">
        <div class="userInfo-userIcon">
          <div class="userImg">
            <img src="~/assets/images/user.jpg" alt="aaa" />
          </div>
          <!-- <div class="Icons">
            <a><i class="fab fa-twitter-square fa-lg fa-fw"></i></a>
            <a><i class="fab fa-facebook-square fa-lg fa-fw"></i></a>
            <a><i class="fab fa-github-square fa-lg fa-fw"></i></a>
          </div> -->
        </div>

        <div class="userInfo-userData">
          <div class="userInfo-userName">
            {{ userName }}
            <span>さん</span>
          </div>
          <div class="userInfo-userFollowing">
            <nuxt-link to="/">
              {{ following }}
              <span>フォロー</span>
            </nuxt-link>
          </div>
          <div class="userInfo-userFollower">
            <nuxt-link to="/">
              {{ follower }}
              <span>フォロワー</span>
            </nuxt-link>
          </div>
          <div class="userInfo-userGreed">
            <p>
              こんにちは私の名前は剛田武です。最近はHTMLについて熱心に勉強しています。
              機会があればPythonなどのプログラミングで人工知能でも作りたいです。
            </p>
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

      <div class="userInfo-userPlans column">
        <h3 class="userPlan_title subtitle is-3">開催予定&予約済み勉強会</h3>
        <ul id="userPlans">
          <li v-for="item in items" v-bind:key="item.id">
            <div class="userPlan_content">
              <span>
                {{ item.title }}
              </span>
              <span>
                {{ item.time }}
              </span>
              <div>
                <img v-bind:src="item.icon" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
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
      isActive: 'topAnnounce',
      // 配列の中身
      items: [
        { id:1, title: '第二十回 javaに挑戦する会 ', time: '12:30', icon:"https://goo.gl/aH9c99" },
        { id:2, title: 'Bar', time:'11:30' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/mytop.scss';
</style>
