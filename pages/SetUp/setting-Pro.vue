<template>
  <div class="allWrap pd-2">
    <div class="columns">
      <aside class="userSet_menu menu column is-one-third">
        <p class="menu-label">
          アカウント管理
        </p>
        <ul class="menu-list">
          <li v-bind:class="{ 'is-active': isActive == 'chProfile' }">
            <a v-on:click="isActive = 'chProfile'">プロフィール編集</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topOpen' }">
            <a v-on:click="isActive = 'topOpen'">外部サービス連携</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topJoin' }">
            <a v-on:click="isActive = 'topJoin'">メールアドレス・通知設定</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topLike' }">
            <a v-on:click="isActive = 'topLike'">パスワード再設定</a>
          </li>
        </ul>
        <p class="menu-label">
          ポイント管理
        </p>
        <ul class="menu-list">
          <li v-bind:class="{ 'is-active': isActive == 'topAnnounce' }">
            <a v-on:click="isActive = 'topAnnounce'">ポイント購入</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topOpen' }">
            <a v-on:click="isActive = 'topOpen'">ポイント履歴</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topJoin' }">
            <a v-on:click="isActive = 'topJoin'">銀行振込</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topLike' }">
            <a v-on:click="isActive = 'topLike'">銀行口座変更</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topLike' }">
            <a v-on:click="isActive = 'topLike'">クレジットカード変更</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topLike' }">
            <a v-on:click="isActive = 'topLike'">月額会員</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'topLike' }">
            <a v-on:click="isActive = 'topLike'">退会</a>
          </li>
        </ul>
      </aside>
      <div class="menu-contents column">
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
      isActive: 'topAnnounce'
    }
  }
}
</script>
