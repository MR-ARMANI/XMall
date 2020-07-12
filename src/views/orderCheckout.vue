<template>
  <div>
    <headertop></headertop>
    <div class="container">
      <div class="w" style="padding-top: 40px;">
        <div class="gray-box">
          <div class="title">
            <h2>收货信息</h2>
            <div></div>
          </div>
          <div>
            <div>
              <ul class="address-item-list clearfix" >
                <li class="address pr" v-for="(item,index) in this.$store.state.cart.addressData" :key="index" :class="{checked:id === item.id}"  @click="chooseAddress(item.id, item.name, item.telNumber, item.address)">
                  <span v-if="id === item.id" class="pa">
                    <svg viewBox="0 0 1473 1024" width="17.34375" height="12">
                      <path
                        d="M1388.020 57.589c-15.543-15.787-37.146-25.569-61.033-25.569s-45.491 9.782-61.023 25.558l-716.054 723.618-370.578-374.571c-15.551-15.769-37.151-25.537-61.033-25.537s-45.482.768-61.024 25.527c-15.661 15.865-25.327 37.661-25.327 61.715 0 24.053 9.667 45.849 25.327 61.715l431.659 436.343c15.523 15.814 37.124 25.615 61.014 25.615s45.491-9.802 61.001-25.602l777.069-785.403c15.624-15.868 25.271-37.66 25.271-61.705s-9.647-45.837-25.282-61.717M1388.020 57.589z"
                        fill="#6A8FE5"
                        p-id="1025"
                      />
                    </svg>
                  </span>
                  <!-- <p>收货人: 张三 (默认地址) </p> -->
                  <p> 收货人:{{item.name}} </p>
                  <p class="street-name ellipsis">收货地址: {{item.telNumber}} </p>
                  <!-- <p>手机号码: 15293855588</p> -->
                  <p>手机号码:  {{item.address}} </p>
                  <div class="operation-section">
                    <span class="update-btn" style="font-size: 12px;" @click="update(item)">修改</span>
                    <span data-id="4221" class="delete-btn"  @click="del(index)" style="font-size: 12px;">删除</span>
                  </div>
                </li>
                <li class="add-address-item" @click="addDate()">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTAxMTQ3ODk4MzAyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwODUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxNS4yIDc5LjJjLTI0My4yIDAtNDQwIDE5Ni44LTQ0MCA0MzkuMnMxOTYuOCA0MzkuMiA0MzkuMiA0MzkuMmMyNDIuNCAwIDQzOS4yLTE5Ni44IDQzOS4yLTQzOS4yUzc1Ny42IDc5LjIgNTE1LjIgNzkuMnogbTI0MS42IDQ2MEg1MzZ2MjIxLjZoLTQxLjZWNTM5LjJIMjcyLjh2LTQxLjZoMjIxLjZWMjc2LjhINTM2djIyMS42aDIyMS42djQwLjh6IiBwLWlkPSIxMDg2IiBmaWxsPSIjNjI2MjYyIj48L3BhdGg+PC9zdmc+"
                    alt
                  />
                  <p>使用新地址</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="gray-box" v-if="($store.state.order.orderLists.length)">
          <div class="title">
            <h2>购物清单</h2>
            <div></div>
          </div>
          <div>
            <div>
              <div class="box-inner ui-cart">
                <div>
                  <div class="cart-table-title">
                    <span class="name">商品信息</span>
                    <span class="subtotal">小计</span>
                    <span class="num">数量</span>
                    <span class="price">单价</span>
                  </div>
                  <div class="cart-table" v-for="(item,index) in this.$store.state.order.orderLists" :key="index">
                    <div data-productid="150635087972564" class="cart-group divide pr">
                      <div class="cart-top-items">
                        <div class="cart-items clearfix">
                          <div class="items-thumb fl">
                            <img
                              alt="支付测试商品 IPhone X 全面屏 全面绽放"
                              src="https://i.loli.net/2018/07/13/5b48ac7766d98.png"
                            />
                            <a title="支付测试商品 IPhone X 全面屏 全面绽放" target="_blank"></a>
                          </div>
                          <div class="name hide-row fl">
                            <div class="name-table">
                              <a
                                title="支付测试商品 IPhone X 全面屏 全面绽放"
                                target="_blank"
                              >{{item.name}}</a>
                            </div>
                          </div>
                          <div>
                            <div class="subtotal" style="font-size: 14px;">¥  {{item.totalPrice}}</div>
                            <div class="item-cols-num">
                              <span>{{item.value}}</span>
                            </div>
                            <div class="price">¥ {{item.price}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cart-bottom-bg fix-bottom">
                  <div class="fix-bottom-inner">
                    <div class="shipping">
                      <div class="shipping-box" style="padding: 0px 40px;">
                        <div class="shipping-total shipping-price">
                          <h4 class="highlight">
                            应付总额：
                            <em>￥{{totalPrice}}</em>
                          </h4>
                        </div>
                      </div>
                      <input
                        @click="toPay"
                        type="button"
                        readonly="readonly"
                        class="big-main-btn main-btn"
                        value="提交订单"
                        style="margin: 0px; width: 130px; height: 50px; line-height: 50px; font-size: 16px;"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <y-popup :open="popupOpen" @close="popupOpen=false" :title="popupTitle">
        <div slot="content" class="md" :data-id="chosenAddressId">
          <div>
            <input type="text" placeholder="收货人姓名" v-model="name"/>
          </div>
          <div>
            <input type="number" placeholder="手机号码" v-model="telNumber"/>
          </div>
          <div>
            <input type="text" placeholder="收货地址" v-model="address"/>
          </div>
          <div>
          </div>
          <y-button text='保存' class="btn main-btn"
              @btnClick="save({userId:userId,addressId:msg.addressId,userName:msg.userName,tel:msg.tel,streetName:msg.streetName,isDefault:msg.isDefault})"
          >
          </y-button>
        </div>
      </y-popup>
    </div>
    <fooder></fooder>
  </div>
</template>

<script>
import headertop from "../components/headertop";
import fooder from "../components/fooder";
import YPopup from "../components/order/popup";
import YButton from "../components/button/button";
export default {
  data() {
    return {
      addressData:[],
      chosenAddressId:'1',
      cartLists: [],
      isDefault:'false',
        addList: [],
        addressId: 1,
        popupOpen: false,
        popupTitle: '管理收货地址',
        num: '', // 立刻购买
        msg: {
          id: '',
          name: '',
          telNumber: '',
          address: '',
          isDefault: false
        },
        id:'1',
        name: '',
        telNumber: '',
        address: '',
        userId: '',
        orderTotal: 0,
        totalPrice:0,
        submit: false,
        submitOrder: '提交订单',
    };
  },
  computed: {
     btnHighlight () {
        let msg = this.msg
        return msg.userName && msg.tel && msg.streetName
      },
  },
  methods: {

    del(index){
      this.$store.state.cart.addressData.splice(index,1);
    },
    toPay(){
      
      this.$router.push({path:'/alipay'}) 
      
      var totalPrice = this.totalPrice;
      var unpaid = this.$store.state.order.unpaid;
      var orderLists = this.$store.state.order.orderLists;
      var allorder =  this.$store.state.order.allorder;
      var name = this.name ;
      var telNumber = this.telNumber ;
      var address  = this.address ;
      for(var i=0;i<orderLists.length;i++){
          unpaid.push({
              totalPrice:totalPrice,
              price:orderLists[i].price,
              name:orderLists[i].name,
              value:orderLists[i].value,
              times:Date.parse(new Date()),
              adsname:name,
              telNumber:telNumber,
              address:address,
          });
          allorder.push({
              totalPrice:totalPrice,
              price:orderLists[i].price,
              name:orderLists[i].name,
              value:orderLists[i].value,
              times:Date.parse(new Date()),
              adsname:name,
              telNumber:telNumber,
              address:address,
          });
      }
      
      this.$store.state.order.orderLists = [];
    },
    // 修改
    update(item) {
      this.popupOpen = true
        if (item) {
          this.popupTitle = '管理收货地址'
          this.msg.name = item.name
          this.msg.telNumber = item.telNumber
          this.msg.address = item.address
          this.msg.isDefault = item.isDefault
          this.msg.id = item.id
        } else {
          this.popupTitle = '新增收货地址'
          this.msg.name = ''
          this.msg.telNumber = ''
          this.msg.address = ''
          this.msg.isDefault = false
          this.msg.id = item.id+1
        }
    },
    addDate(){
      this.popupOpen = true;
      this.popupTitle = "新增收货地址";
      this.id = this.$store.state.cart.addressData.length + 1;
      this.$store.state.cart.addressData.push({
          id: this.id,
          name:this.name,
          telNumber:this.telNumber,
          address:this.address,
          isDefault: false,
        })
    },
    chooseAddress (id, name, telNumber, address) {
      this.id = id;
      this.name = name;
      this.telNumber = telNumber;
      this.address = address;
    },
    // 保存
    save () {
      this.popupOpen = false
      if (this.id) {
        if(this.name !="" && this.telNumber != "" && this.address != ""){
          this.$store.state.cart.addressData[this.id-1].name = this.name;
          this.$store.state.cart.addressData[this.id-1].telNumber = this.telNumber;
          this.$store.state.cart.addressData[this.id-1].address = this.address;
          this.name = "";
          this.telNumber = "";
          this.address = "";
        }
      } 
  },
  },
  created() {
    this.totalPrice = this.$store.state.order.orderLists[0].totalPrice;
    //地址
    this.chosenAddressId = this.$store.state.cart.chosenAddressId;
  },
  components: {
    headertop,
    fooder,
    YPopup,
    YButton
  },
};
</script>

<style lang="scss" scoped>
// 收货地址
.address-item-list {
  padding: 30px 13px 0;
  .address {
    padding: 19px 14px 0 19px;
    p {
      line-height: 26px;
    }
  }
  li.checked {
    border-color: #6a8fe5;
    position: relative;
    background: #fff;
    .pa {
      right: 15px;
      top: 18px;
    }
    &:hover {
      background: #fff;
    }
  }
  li {
    position: relative;
    overflow: hidden;
    float: left;
    width: 276px;
    height: 158px;
    margin: 0 0 30px 16px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    background: #fafafa;
    line-height: 14px;
    text-align: left;
    word-wrap: break-word;
    word-break: normal;
    color: #626262;
    cursor: pointer;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
    &:hover {
      background: #f2f2f2;
      .operation-section {
        visibility: visible;
        transform: translate(0, 0);
      }
    }
    &.add-address-item {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 30px;
        height: 30px;
      }
      p {
        margin-top: 5px;
      }
    }
    .operation-section {
      visibility: hidden;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 28px;
      background: #e1e1e1;
      border-top: 1px solid #e1e1e1;
      transition: all 0.2s ease;
      transform: translate(0, 29px);
      border-top: 1px solid #e1e1e1;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 11;
      span {
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 100%;
        &:hover {
          background: #f2f2f2;
        }
      }

      span + span {
        border-left: 1px solid #e1e1e1;
      }
    }
  }
}

.s-content {
  .md {
    > div {
      text-align: left;
      margin-bottom: 15px;
      > input {
        width: 100%;
        height: 50px;
        font-size: 18px;
        padding: 10px 20px;
        border: 1px solid #ccc;
        border-radius: 6px;
        box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset,
          -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
        line-height: 46px;
      }
    }
  }

  .btn {
    margin: 0;
    width: 100%;
    height: 50px;
    font-size: 14px;
    line-height: 48px;
  }
}

.ui-cart {
  img {
    width: 80px;
    height: 80px;
  }

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
    .subtotal {
      font-weight: 700;
    }
    .item-cols-num,
    .price,
    .subtotal {
      overflow: hidden;
      float: right;
      width: 137px;
      text-align: center;
      color: #666;
      line-height: 140px;
    }
    /*数量*/
    .subtotal,
    .item-cols-num {
      padding-top: 50px;
      line-height: 40px;
    }
    .select {
      width: 112px;
      height: 40px;
      padding-top: 4px;
      margin: 0 auto;
      line-height: 40px;
      .down {
        background-position: 0 -60px;
      }
      .down.down-disabled:hover {
        background-position: 0 -300px;
        cursor: not-allowed;
      }
      .num {
        position: relative;
        overflow: hidden;
        display: inline-block;
        width: 36px;
        height: 18px;
        margin: 7px 0 0;
        border: none;
        border-radius: 3px;
        line-height: 18px;
        text-align: center;
        font-size: 14px;
        transition: all 0.2s ease-out;
      }
    }
  }
  .down.down-disabled {
    background-position: 0 -300px;
    cursor: not-allowed;
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

.fix-bottom {
  padding: 22px 29px 19px 30px;
  height: 90px;
  width: 100%;
  z-index: 1;
  background-position: center;
  background: #fdfdfd;
  background: -webkit-linear-gradient(#fdfdfd, #f9f9f9);
  background: linear-gradient(#fdfdfd, #f9f9f9);
  border-top: 1px solid #e9e9e9;
  box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.04);
  .cart-bottom-bg {
    height: 80px;
    border-top: 1px solid #d9d9d9;
    border-radius: 0 0 8px 8px;
  }
  .fix-bottom-inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .shipping {
    display: flex;
    align-items: center;
  }
  em {
    display: inline-block;
    position: relative;
    top: 3px;
    margin-top: -4px;
    font-size: 24px;
    color: #d44d44;
    font-weight: 700;
  }
}

.attribute,
.name p {
  color: #999;
  font-size: 12px;
  padding-top: 4px;
  line-height: 17px;
}
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 18px;
      font-weight: 400;
      color: #626262;
      display: inline-block;
    }
  }
}
</style>