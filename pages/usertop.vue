<template>
  <div class="allWrap">
    <v-container>
      <v-row>
        <v-col xl="8" lg="8" md="8" sm="12" xs="12">
          <v-row>
            <!-- ユーザーアバター -->
            <v-col
              :align="'center'"
              :justify="'center'"
              lg="3"
              md="3"
              sm="3"
              xs="12"
            >
              <v-avatar size="150">
                <img
                  class="userIcon"
                  src="~/assets/images/user.jpg"
                  alt="user-icon"
                />
              </v-avatar>
            </v-col>
            <!-- ユーザー情報 -->
            <v-col :justify="'center'" lg="9" md="9" sm="9" xs="12">
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
                  機会があればCSSなどのプログラミングで人工知能でも作りたいです。
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col xl="4" lg="4" md="4" class="studygroup-list">
          <v-title>
            開催予定&予約済み勉強会
          </v-title>
          <planCard />
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="12" xs="12" class="studygroup-list--middle">
          <v-title>
            開催予定&予約済み勉強会
          </v-title>
          <planCard />
        </v-col>
      </v-row>

      <v-row>
        <v-col xl="8" lg="8" md="8" sm="12" xs="12">
          <v-row>
            <v-tabs background-color="#C4D929" color="white" show-arrows>
              <v-tabs-slider color="white"></v-tabs-slider>
              <v-tab v-on:click="isActive = 'topAnnounce'"
                >発表した勉強会</v-tab
              >
              <v-divider inset vertical></v-divider>
              <v-tab v-on:click="isActive = 'topOpen'">開催した勉強会</v-tab>
              <v-divider inset vertical></v-divider>
              <v-tab v-on:click="isActive = 'topJoin'">参加した勉強会</v-tab>
              <v-divider inset vertical></v-divider>
              <v-tab v-on:click="isActive = 'topLike'">いいねした勉強会</v-tab>
              <v-divider inset vertical></v-divider>
            </v-tabs>
            <topAnnounce v-if="isActive == 'topAnnounce'" />
            <topOpen v-if="isActive == 'topOpen'" />
            <topJoin v-if="isActive == 'topJoin'" />
            <topLike v-if="isActive == 'topLike'" />
          </v-row>
          <!-- <v-row>
            <topAnnounce v-if="isActive == 'topAnnounce'" />
            <topOpen v-if="isActive == 'topOpen'" />
            <topJoin v-if="isActive == 'topJoin'" />
            <topLike v-if="isActive == 'topLike'" />
          </v-row> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import planCard from '@/components/pages/MyPage/planCard'
import topAnnounce from '@/components/pages/MyPage/top-Announce'
import topOpen from '@/components/pages/MyPage/top-Open'
import topLike from '@/components/pages/MyPage/top-Like'
import topJoin from '@/components/pages/MyPage/top-Join'

export default {
  components: {
    planCard,
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
// offsetは空白の要素の幅（margin）
// v-row、v-colは全てmargin: 12pxされる
.allWrap {
  background: #f5f5f5;
  @media screen and (max-width: 960px) {
    .studygroup-list {
      display: none;
    }
    .studygroup-list--middle {
      display: block;
    }
  }
  @media screen and (min-width: 960px) {
    .studygroup-list {
      display: block;
    }
    .studygroup-list--middle {
      display: none;
    }
  }
  .userInfo-userGreed {
    max-width: 500px;
    border: 1px solid #707070;
    border-radius: 10px;
    margin-top: 15px;
    padding: 15px;
    box-shadow: 10px rgba($color: #000000, $alpha: 0.4);
  }
}
</style>
