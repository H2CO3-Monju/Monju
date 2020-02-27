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
          <v-tab v-on:click="isActive = 'chCoordination'">
            メール・通知設定
          </v-tab>
          <v-tab v-on:click="isActive = 'chKey'">
            パスワード再設定
          </v-tab>
          <v-title>
            ポイント管理
          </v-title>
          <v-tab v-on:click="isActive = 'pointMng'">
            ポイント購入
          </v-tab>
          <v-tab v-on:click="isActive = 'pointRedemption'">
            ポイント換金
          </v-tab>
          <v-tab v-on:click="isActive = 'pointHistory'">
            ポイント履歴
          </v-tab>
          <v-tab v-on:click="isActive = 'chBank'">
            銀行口座変更
          </v-tab>
          <v-tab v-on:click="isActive = 'chCard'">
            クレジットカード変更
          </v-tab>
          <v-tab v-on:click="isActive = 'memberRegistration'">
            月額会員
          </v-tab>
          <v-tab v-on:click="isActive = 'unsubscribe'">
            退会
          </v-tab>
        </v-tabs>
      </v-col>

      <v-col lg="8" md="8" sm="12" xs="12">
        <div>
          <div class="content">
            <chProfile v-if="isActive == 'chProfile'" />
          </div>
          <div class="content">
            <chCoordination v-if="isActive == 'chCoordination'" />
          </div>
          <div class="content">
            <chKey v-if="isActive == 'chKey'" />
          </div>
          <div class="content">
            <pointMng v-if="isActive == 'pointMng'" />
          </div>
          <div class="content">
            <pointRedemption v-if="isActive == 'pointRedemption'" />
          </div>
          <div class="content">
            <pointHistory v-if="isActive == 'pointHistory'" />
          </div>
          <div class="content">
            <chBank v-if="isActive == 'chBank'" />
          </div>
          <div class="content">
            <chCard v-if="isActive == 'chCard'" />
          </div>
          <div class="content">
            <memberRegistration v-if="isActive == 'memberRegistration'" />
          </div>
          <div class="content">
            <unsubscribe v-if="isActive == 'unsubscribe'" />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import chProfile from '@/components/pages/setUps/ch-Profile'
import chCoordination from '@/components/pages/setUps/ch-coordination'
import chKey from '@/components/pages/setUps/ch-key'
import pointMng from '@/components/pages/setUps/point-mng'
import pointRedemption from '@/components/pages/setUps/point-redemption'
import pointHistory from '@/components/pages/setUps/point-history'
import chBank from '@/components/pages/setUps/ch-bank'
import chCard from '@/components/pages/setUps/ch-card'
import memberRegistration from '@/components/pages/setUps/member-registration'
import unsubscribe from '@/components/pages/setUps/unsubscribe'

export default {
  components: {
    chProfile,
    chCoordination,
    chKey,
    pointMng,
    pointRedemption,
    pointHistory,
    chBank,
    chCard,
    memberRegistration,
    unsubscribe
  },
  data() {
    return {
      isActive: 'chProfile'
    }
  }
}
</script>
