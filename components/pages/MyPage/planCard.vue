<template>
  <ul id="userPlans">
    <li v-for="item in items" v-bind:key="item.id">
      <div class="userPlan_content">
        <div class="plan_date">
          <span class="plan_title">
            {{ item.title }}
          </span>
          <span class="plan_time">
            {{ item.time }}
          </span>
        </div>
        <div class="plan_icon">
          <v-img v-bind:src="item.icon"> </v-img>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      // 配列の中身
      items: [
        {
          id: 1,
          title: '第二十回 javaに挑戦する会 ',
          time: '12:30',
          icon: 'https://goo.gl/aH9c99'
        },
        { id: 2, title: 'Bar', time: '11:30' }
      ]
    }
  }
}
</script>

<style lang="scss">
.userPlans_title {
  color: #7994a7;
}
.userPlan_content {
  width: auto;
  height: 100px;
  border-left: solid 10px #333333;
  border-bottom: solid 2px #333333;
  margin-bottom: 25px;
  padding: 5px;
  .plan_date {
    width: 200px;
    float: left;
    .plan_title {
      color: #333;
      font-size: 16px;
    }
    .plan_time {
      line-height: 100px;
    }
  }

  .plan_icon {
    float: right;
    width: 100px;
    height: 70px;
    overflow: hidden;
    border: none;
  }
}
</style>
