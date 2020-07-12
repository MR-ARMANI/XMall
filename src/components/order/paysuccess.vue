<template>
    <div>
        <headertop></headertop>
        <div class="w">
    <y-shelf title="支付成功" style="text-align: center">
      <div slot="content" class="content">
        <p><i class="el-icon-circle-check icon-success"></i> 恭喜您支付成功，请等待5-30分钟系统确认<br>总共花费 <span class="price"><em style="font-size: 18px">¥</em>{{ totalPrice }}.00</span> 元</p>
        <div style="margin-top: 20px;">
          <router-link to="/user">
            <y-button text="查看订单" style="width: 150px;height: 50px;line-height: 48px;font-size: 20px"
                      classStyle="main-btn"></y-button>

          </router-link>
          <router-link to="/home">
            <y-button text="继续选购" style="width: 150px;height: 50px;line-height: 48px;font-size: 20px"
                      classStyle="main-btn"></y-button>

          </router-link>
        </div>
      </div>
    </y-shelf>
  </div>
  <fooder></fooder>
    </div>
</template>

<script>
import YShelf from '../shelf'
import YButton from '../button/button'
import headertop from "../../components/headertop";
import fooder from "../../components/fooder";
export default {
    components:{
        YShelf,
        YButton,
        headertop,
        fooder,
    },
    created() {
      this.totalPrice = this.$store.state.order.unpaid[0].totalPrice
    },
}
</script>

<style lang="scss" scoped>
.w{
  margin-top: 80px;
}
 .content {
    padding: 150px 0;
    font-size: 30px;
  }

  .icon-success {
    font-size: 33px;
    color: #01b401;
  }

  span.price {
    color: #d44d44;
    font-weight: 700;
    line-height: 20px;
    text-align: right;
  }
  .main-btn:nth-last-child(1){
      margin-left: 20px;
  }

</style>