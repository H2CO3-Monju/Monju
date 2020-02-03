<template>
  <div class="allWrap">
    <aside class="userSetting menu">
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
  </div>
</template>
