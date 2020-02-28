<template>
  <div>
    <v-row justify="center" align-content="center">
      <v-col lg="3" md="3" sm="12" xs="12">
        <v-tabs vertical color="#C4D929" background-color="#444444" dark>
          <h2 class="title pl-3 pt-3">
            アカウント管理
          </h2>
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
          <h2 class="title pl-3 pt-3">
            ポイント管理
          </h2>
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

      <v-col lg="9" md="9" sm="12" xs="12">
        <div>
          <div class="container">
            <chProfile v-if="isActive == 'chProfile'" />
            <chCoordination v-else-if="isActive == 'chCoordination'" />
            <chKey v-else-if="isActive == 'chKey'" />
            <pointMng v-else-if="isActive == 'pointMng'" />
            <pointRedemption v-else-if="isActive == 'pointRedemption'" />
            <pointHistory v-else-if="isActive == 'pointHistory'" />
            <chBank v-else-if="isActive == 'chBank'" />
            <chCard v-else-if="isActive == 'chCard'" />
            <memberRegistration v-else-if="isActive == 'memberRegistration'" />
            <unsubscribe v-else-if="isActive == 'unsubscribe'" />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import chProfile from '@/components/pages/setUps/account'
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

<style lang="scss" scoped>
.title {
  color: #7994a7;
}
</style>
<style lang="scss">
// .v-tabs {
//   .v-item-group {
//     .v-slide-group__wrapper {
//       .v-slide-group__content {
//         background-color: #333333;
//         .v-tab {
//           max-width: 200px;
//         }
//       }
//     }
//   }
// }
</style>
