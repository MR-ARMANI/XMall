<template>
  <div>
    <!-- 头部组件 -->
    <headertop></headertop>


    <div class="container">
      <div class="store-content page-cart" v-if="!($store.state.cart.cartLists.length)">
        <div class="gray-box">
          <div class="title">
            <h2>购物清单</h2>
          </div>
          <div style="padding: 50px;">
            <div class="cart-e"></div>
            <p style="text-align: center; padding: 20px; color: rgb(141, 141, 141);">你的购物车空空如也</p>
            <div style="text-align: center;">
              <a href="/all" class>
                <input
                  type="button"
                  readonly="readonly"
                  class="default-btn"
                  value="现在选购"
                  style="width: 150px; height: 40px; line-height: 38px; color: rgb(141, 141, 141);"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="store-content page-cart" v-if="($store.state.cart.cartLists.length)">
        <div class="gray-box">
          <div class="title">
            <h2>购物清单</h2>
          </div>
          <div>
            <div class="ui-cart">
              <div>
                <div class="cart-table-title">
                  <span class="name">商品信息</span>
                  <span class="operation">操作</span>
                  <span class="subtotal">小计</span>
                  <span class="num">数量</span>
                  <span class="price1">单价</span>
                </div>
                <div
                  class="cart-table"
                  v-for="(item,index) in this.$store.state.cart.cartLists"
                  :key="index"
                >
                  <div class="cart-group divide pr">
                    <div class="cart-top-items">
                      <div class="cart-items clearfix">
                        <!-- 选择 -->
                        <div class="items-choose">
                          <el-checkbox v-model="item.checked" @click="checkone(index)"></el-checkbox>
                          <!-- <span
                            class="blue-checkbox-new "
                            :class="{'checkbox-on':item.checked == 'true'}"
                            @click="checkone(index)"
                          ></span> -->
                        </div>

                        <div class="items-thumb fl">
                          <img
                            alt="支付测试商品 IPhone X 全面屏 全面绽放"
                            src="https://i.loli.net/2018/07/13/5b48ac7766d98.png"
                          />
                          <a title="支付测试商品 IPhone X 全面屏 全面绽放" target="_blank"></a>
                        </div>
                        <div class="name hide-row fl">
                          <div class="name-table">
                            <a title="支付测试商品 IPhone X 全面屏 全面绽放" target="_blank">{{item.name}}</a>
                          </div>
                        </div>
                        <div class="operation">
                          <a href="javascript:;" class="items-delete-btn" @click="del(index)"></a>
                        </div>
                        <div>
                          <div
                            class="subtotal"
                            style="font-size: 14px;"
                          >¥ {{item.price * item.value}}</div>
                          <div
                            class="item-cols-num clearfix"
                            style="height: 140px; display: flex; align-items: center; justify-content: center;"
                          >
                            <div class="select">
                              <span class="down" @click="subtractNum">-</span>
                              <span class="num">
                                <input type="text" v-model="item.value" maxlength="2" class="show" />
                              </span>
                              <span class="up" @click="addNum">+</span>
                            </div>
                          </div>
                          <div class="price1">¥ {{item.price}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cart-bottom-bg fix-bottom">
              <div class="fix-bottom-inner">
                <div class="cart-bar-operation">
                  <div>
                    <div class="choose-all" v-for="(item,index) in this.$store.state.cart.cartLists" :key="index">
                      <el-checkbox  v-model="item.checked" @click="checkone(index)"></el-checkbox>
                      <!-- <span class="blue-checkbox-new checkbox-on" ></span> -->
                      <span>全选</span>
                    </div>
                    <div class="delete-choose-goods">删除选中的商品</div>
                  </div>
                </div>
                <div
                  class="shipping"
                  v-for="(item,index) in this.$store.state.cart.cartLists"
                  :key="index"
                >
                  <div class="shipping-box">
                    <div class="shipping-total shipping-num">
                      <h4 class="highlight">
                        已选择
                        <i>{{ value }}</i> 件商品
                      </h4>
                      <h5>
                        共计
                        <i>{{ value }}</i> 件商品
                      </h5>
                    </div>
                    <div class="shipping-total shipping-price">
                      <h4 class="highlight">
                        应付总额：
                        <span>￥</span>
                        <i>{{totalPrice}}</i>
                      </h4>
                      <h5 class="shipping-tips ng-scope">应付总额不含运费</h5>
                    </div>
                  </div>
                  <y-button
                    class="main-btn"
                    @btnClick="toindent"
                    style="margin: 0;width: 130px;height: 50px;line-height: 50px;font-size: 16px"
                    :text="checkoutNow"
                  ></y-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部组件 -->
    <fooder></fooder>
  </div>
</template>

<script>
import headertop from "../components/headertop";
import fooder from "../components/fooder";
import YButton from "../components/button/button";
// import { mapState } from "vuex"
// import { setStore } from "../utils/localstore"
export default {
  data() {
    return {
      zeronum:0,
      value: 0,
      checked: false,
      submit: true,
      checkoutNow: "现在结算",
      iscar: false,
      cartLists: [],
      totalPrice:0,

    };
  },
  computed: {
    // ...mapState(['cartLists'])
  },
  methods: {
    del(index){
      this.$store.state.cart.cartLists.splice(index,1);
    },
    calc(){
       //计算总价格
      this.totalPrice = 0;
      for(var i = 0;i<this.$store.state.cart.cartLists.length;i++){
          if(this.$store.state.cart.cartLists[i].checked){
              this.totalPrice += Number(this.$store.state.cart.cartLists[i].price)*Number(this.$store.state.cart.cartLists[i].value);
          }
      }
    },
    // 商品数量加一
    addNum() {
      let index = this.$store.state.cart.cartLists.findIndex(
        val => val.id == this.$store.state.cart.cartLists.id
      );
        //存在，数量加
        this.$store.state.cart.cartLists[index].value += 1;
    },
    // 商品数量减一
    subtractNum() {
      //获取id
      let index = this.$store.state.cart.cartLists.findIndex(
        val => val.id == this.$store.state.cart.cartLists.id
      );
      // 如果减到一的时候
      if (this.$store.state.cart.cartLists[index].value === 1) {
        this.$store.state.cart.cartLists[index].value = 1;
        return;
      } 
      //如果不等于一
      else {
        this.$store.state.cart.cartLists[index].value -= 1;
      }
    },
    checkout() {
      this.checkoutNow = "结算中...";
      this.submit = false;
      this.$router.push({ path: "/orderCheckout" });
    },
    checkedAll(index) {
      // this.cartLists.forEach(item => {
      //   item.checked = !this.checked;
      // });
      // this.checked = !this.checked;

      this.$store.state.cart.cartLists[index].checked = !this.$store.state.cart.cartLists[index].checked;
    },
    checkone(index) {
       this.$store.state.cart.cartLists[index].checked = !this.$store.state.cart.cartLists[index].checked;
    },
    calcValue(){
      this.value = 0;
      for(var j = 0;j<this.$store.state.cart.cartLists.length;j++){
          if(this.$store.state.cart.cartLists[j].checked){
              this.value = this.$store.state.cart.cartLists[j].value;
          }
          else{
            this.value = 0;
          }
      }
    },
    //提交订单
    toindent(){
      //全选了
       if( this.$store.state.cart.cartLists[0].checked){
          for(var i=0;i<this.$store.state.cart.cartLists.length;i++){
            if(this.$store.state.cart.cartLists[i].checked){
                var cartLists = this.$store.state.cart.cartLists;
                this.$store.state.order.orderLists.push({
                        name:cartLists[i].name,
                        price:cartLists[i].price,
                        value:cartLists[i].value,
                        totalPrice:this.totalPrice,
                    });
            }
        }
        this.$store.state.cart.totalPrice = this.totalPrice;
        this.$router.push({path:"/orderCheckout"});
        //清空购物车
        this.$store.state.cart.cartLists = [];
       }
       else{
         return
       }
    }
  },

  components: {
    headertop,
    fooder,
    YButton
  },
  mounted() {
    
    },
  created() {
    this.calc();
    this.value = 0;
      for(var j = 0;j<this.$store.state.cart.cartLists.length;j++){
          if(this.$store.state.cart.cartLists[j].checked){
              this.value = this.$store.state.cart.cartLists[j].value;
          }
          else{
            this.value = 0;
          }
      }
    
  },
  beforeUpdate(){
      //计算总价格
      this.calc();
      this.value = 0;
      for(var j = 0;j<this.$store.state.cart.cartLists.length;j++){
          if(this.$store.state.cart.cartLists[j].checked){
              this.value = this.$store.state.cart.cartLists[j].value;
          }
          else{
            this.value = 0;
          }
      }
  },
};
</script>

<style lang="scss" scoped>
.store-content {
  clear: both;
  width: 1220px;
  min-height: 600px;
  padding: 0 0 25px;
  margin: 0 auto;
  .gray-box {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
    .title {
      padding-left: 30px;
      position: relative;
      z-index: 10;
      height: 60px;
      padding: 0 10px 0 24px;
      border-bottom: 1px solid #d4d4d4;
      border-radius: 8px 8px 0 0;
      box-shadow: rgba(0, 0, 0, 0.06) 0 1px 7px;
      background: #f3f3f3;
      background: -webkit-linear-gradient(#fbfbfb, #ececec);
      background: linear-gradient(#fbfbfb, #ececec);
      line-height: 60px;
      font-size: 18px;
      color: #333;
    }
  }
  .ui-cart {
    padding-bottom: 91px;
    .cart-table-title {
      position: relative;
      z-index: 1;
      line-height: 38px;
      height: 38px;
      padding: 0 0 0 30px;
      font-size: 12px;
      background: #eee;
      border-bottom: 1px solid #dbdbdb;
      border-bottom-color: rgba(0, 0, 0, 0.08);
      .name {
        float: left;
        text-align: left;
      }
      span {
        width: 137px;
        float: right;
        text-align: center;
        color: #838383;
      }
    }
    .cart-group.divide {
      .cart-items {
        border-top: 1px dashed #eee;
      }
    }
    .cart-items {
      position: relative;
      height: 140px;
      margin-left: 74px;
      /*删除*/
      .operation {
        padding: 58px 0 0;
        font-size: 12px;
        line-height: 24px;
        .items-delete-btn {
          background-image: url("../../static/images/delete-btn-icon_a35bf2437e@2x.jpg");
          &:hover {
            background-position: 0 -36px;
          }
        }
        .items-delete-btn {
          display: block;
          width: 24px;
          height: 24px;
          margin: 0 auto;
          color: #c2c2c2;
          background: url("../../static/images/delete-btn-icon_a35bf2437e@2x.jpg");
          -webkit-background-size: 100% auto;
          background-size: 100% auto;
          -moz-transition: none;
          -webkit-transition: none;
          -o-transition: none;
          transition: none;
        }
      }
      .subtotal {
        font-weight: 700;
      }
      .item-cols-num,
      .operation,
      .price1,
      .subtotal {
        overflow: hidden;
        float: right;
        width: 137px;
        text-align: center;
        color: #666;
        line-height: 140px;
      }
    }
    .cart-group.divide .cart-top-items:first-child .cart-items {
      border-top: none;
    }
    .items-choose {
      position: absolute;
      left: -74px;
      top: 0;
      width: 74px;
      height: 20px;
      padding: 60px 0 0 31px;
      font-size: 12px;
      color: #999;
    }
    .items-thumb {
      position: relative;
      margin-top: 30px;
      overflow: hidden;
      width: 80px;
      height: 80px;
    }
    img {
      width: 80px;
      height: 80px;
    }
    .cart-items .items-thumb > a,
    .ui-cart .cart-items .items-thumb > i {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border: 1px solid #fff;
      border-radius: 3px;
      border: 0 solid rgba(255, 255, 255, 0.1);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
    }
    .name {
      width: 380px;
      margin-left: 20px;
      color: #323232;
      display: table;
      a {
        color: #333;
        font-size: 16px;
      }
    }
    .name-table {
      display: table-cell;
      vertical-align: middle;
      height: 140px;
    }
    .attribute,
    .name p {
      color: #999;
      font-size: 12px;
      padding-top: 4px;
      line-height: 17px;
    }
  }
}

.page-cart {
  padding-top: 40px;
  .fix-bottom {
    height: 90px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
    background-position: center;
    background: #fdfdfd;
    background: -webkit-linear-gradient(#fdfdfd, #f9f9f9);
    background: linear-gradient(#fdfdfd, #f9f9f9);
    border-top: 1px solid #e9e9e9;
    box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.04);
    .cart-bottom-bg {
      height: 80px;
      /*background: url(../img/store/library/cart-wrapper-bg_4c8003c76e.jpg) repeat-x;*/
      border-top: 1px solid #d9d9d9;
      border-radius: 0 0 8px 8px;
    }
  }
  .cart-bar-operation {
    float: left;
    padding: 35px 26px;
    font-size: 12px;
  }
  .blue-checkbox-new {
    float: left;
    margin-right: 9px;
  }
  .choose-all,
  .delete-choose-goods,
  .selected-count {
    float: left;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    position: relative;
  }
  .blue-checkbox-new,
  .blue-checkbox-new.checkbox-disable,
  .blue-checkbox-new.checkbox-on {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    background: url("../../static/images/checkbox-new_631a56a4f6.png") no-repeat
      0 -20px;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
  }

  .blue-checkbox-new.checkbox-on,
  .choose-checkbox-on .blue-checkbox-new {
    background: url("../../static/images/checkbox-new_631a56a4f6.png") no-repeat
      0 0;
  }
  .delete-choose-goods {
    position: relative;
    margin-left: 21px;
    color: #bbb;
  }
  .shipping {
    float: right;
    padding: 20px 30px;
  }
  .shipping-box {
    display: inline-block;
    padding-top: 1px;
    margin-right: 10px;
  }
  .shipping-total {
    display: inline-block;
    border-left: 1px solid #e1e1e1;
    padding: 0 20px;
    .shipping-price {
      width: 155px;
      padding-right: 0;
    }
    &.shipping-num i {
      width: 28px;
      display: inline-block;
      text-align: center;
    }
    h4 {
      color: #323232;
      > i {
        font-size: 18px;
        font-weight: 700;
      }
      i,
      span {
        color: #d44d44;
      }
    }
    h5 {
      color: #959595;
      > i {
        font-size: 16px;
        font-weight: 700;
      }
    }
  }

  .shipping-total.shipping-num {
    text-align: right;
  }
  .shipping-total:first-child {
    border: none;
  }
  .big-main-btn {
    float: right;
    height: 48px;
  }
}

.cart-e {
  margin: 0 auto;
  background: url("../../static/images/cart-empty_@2x.png") no-repeat;
  width: 275px;
  height: 300px;
  color: #8d8d8d;
}

.select {
  input {
    z-index: 10;
    width: 36px;
    height: 18px;
    background-color: #fff;
    border: none;
    text-align: center;
    line-height: 18px;
    font-size: 14px;
    padding: 0;
    color: #666;
    visibility: hidden;
    position: relative;
    border: none;
    &.show {
      visibility: visible;
    }
  }
  ul {
    padding: 0;
    line-height: 18px;
    font-size: 14px;
    display: inline-block;
    position: absolute;
    left: 0;
    list-style: none;
    width: 36px;
    font-family: system-ui;
    z-index: 1;
    transform: translateY(-36px);
  }
  .up.up-disabled,
  .up.up-disabled:hover {
    background-position: 0 -240px !important;
    cursor: not-allowed !important;
  }
}

/*数量*/
.item-cols-num {
  display: inline-block;
}

.select {
  height: 40px;
  padding-top: 4px;
  input {
    width: 100%;
    text-align: center;
  }
  .down {
    background-position: 0 -60px;
  }
  .down.down-disabled:hover {
    background-position: 0 -300px;
    cursor: not-allowed;
  }
  .down,
  .up {
    background: url(../../static/images/cart-updown_8303731e15@2x.jpg) no-repeat;
    overflow: hidden;
    float: left;
    width: 34px;
    height: 37px;
    background-size: 100% auto;
    line-height: 40px;
    text-indent: -9999em;
    cursor: pointer;
    user-select: none;
  }
  .num {
    position: relative;
    overflow: hidden;
    text-align: center;
    float: left;
    width: 36px;
    height: 18px;
    margin: 7px 0 0;
    border: none;
    border-radius: 3px;
    line-height: 18px;
    text-align: center;
    font-size: 14px;
  }
  .up {
    margin: 0;
    background-position: 0 0;
    &:hover {
      background-position: 0 -120px;
    }
  }
  .down {
    background-position: 0 -60px;
    &:hover {
      background-position: 0 -180px;
    }
  }
}

.down.down-disabled {
  background-position: 0 -300px;
  cursor: not-allowed;
}
</style>