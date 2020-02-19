<template>
  <div>
    <v-row justify="center" align-content="center">
      <v-col lg="4" md="4" sm="12" xs="12">
        <v-tabs vertical>
          <v-title>
            アカウント管理
          </v-title>
          <!-- 外部サービス連携はプロフィールないにいれる -->
          <v-tab v-on:click="isActive = 'chProfile'">
            プロフィール編集
          </v-tab>
          <v-tab v-on:click="isActive = 'topJoin'">
            メール・通知設定
          </v-tab>
          <v-tab v-on:click="isActive = 'topLike'">
            パスワード再設定
          </v-tab>
          <v-title>
            ポイント管理
          </v-title>
          <v-tab v-on:click="isActive = 'topOpen'">
            ポイント購入
          </v-tab>
          <v-tab v-on:click="isActive = 'topOpen'">
            ポイント換金
          </v-tab>
          <v-tab v-on:click="isActive = 'topOpen'">
            ポイント履歴
          </v-tab>
          <v-tab v-on:click="isActive = 'topOpen'">
            銀行口座変更
          </v-tab>
          <v-tab v-on:click="isActive = 'topOpen'">
            クレジットカード変更
          </v-tab>
          <v-tab v-on:click="isActive = 'topOpen'">
            月額会員
          </v-tab>
          <v-tab v-on:click="isActive = 'topOpen'">
            退会
          </v-tab>
        </v-tabs>
      </v-col>

      <v-col lg="8" md="8" sm="12" xs="12">
        <div>
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
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
      isActive: 'topAnnounce'
    }
  }
}
</script>
