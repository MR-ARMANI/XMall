<template>
  <div>
    <headertop></headertop>

    <div class="container">
      <div data-v-c8a942a0 class="w store-content main">
        <div class="gray-box">
          <div class="gallery-wrapper">
            <div class="gallery">
              <div class="thumbnail">
                <ul>
                  <li
                    v-for="(item,index) in leftImg"
                    :key="index"
                    :class="{on:big===item}"
                    @click="big = item,indexFlag = index"
                  >
                    <img :src="item.url" />
                  </li>
                </ul>
              </div>
              <div class="thumb">
                <div class="big">
                  <img :src="leftImg[indexFlag].url" />
                </div>
              </div>
            </div>
          </div>
          <div class="banner">
            <div class="sku-custom-title">
              <h4>{{goodsLists[zeronum].name}}</h4>
              <h6>
                <span>此仅为支付测试商品 拍下不会发货</span>
                <span class="price">
                  <em>¥</em>
                  <i>{{goodsLists[zeronum].price}}.00</i>
                </span>
              </h6>
            </div>
            <div class="num">
              <span class="params-name">数量</span>
              <div class="item-cols-num clearfix">
                <div class="select">
                  <span class="down down-disabled" @click="subtractNum">-</span>
                  <span class="num value">
                    <input
                      type="text"
                      :value="value"
                      disabled="disabled"
                      maxlength="2"
                      class="show"
                    />
                  </span>
                  <span class="up" @click="addNum">+</span>
                </div>
              </div>
            </div>
            <div class="buy">
              <y-button
                text="加入购物车"
                @btnClick="addCart"
                classStyle="main-btn"
                style="width: 145px;height: 50px;line-height: 48px"
              ></y-button>
              <y-button
                text="现在购买"
                @btnClick="payCart"
                style="width: 145px;height: 50px;line-height: 48px;margin-left: 10px"
              ></y-button>
            </div>
          </div>
        </div>
        <div class="item-info">
          <div class="gray-box">
            <div class="title">
              <h2>产品信息</h2>
              <div></div>
            </div>
            <div>
              <div>
                <div class="img-item">
                  <div>
                    <p style="text-align:center;">
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t7843/137/3005340945/124833/dc7c71f2/59b8ccd1N2bffd055.jpg"
                        alt
                      />
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t8764/314/1380452846/296346/d62490e2/59b8ccd1N96ce760d.jpg"
                        alt
                      />
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t8710/275/1373463301/363710/ebf00bff/59b8ccbaN2d563f74.jpg"
                        alt
                      />
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t8632/330/1390725687/229853/e56f9e1b/59b8ccd1N7b8b6bdb.jpg"
                        alt
                      />
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t9115/290/1376678976/488369/591760dc/59b8ccc6N1563a61b.jpg"
                        alt
                      />
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t8233/331/1431263348/183032/b875528c/59b8ccd1Ne7e633e3.jpg"
                        alt
                      />
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t8785/253/890847377/186916/c467a464/59b8ccd1N4551397c.jpg"
                        alt
                      />
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t8728/276/1416802585/172158/1516ec08/59b8ccd1N95aae9c9.jpg"
                        alt
                      />
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t9082/133/1223014275/307097/58f97021/59b8ccd2Nebfc633a.jpg"
                        alt
                      />
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t9052/275/1400615286/155643/1b0ecf44/59b8ccd2N46bd82bf.jpg"
                        alt
                      />
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t9169/240/1361662217/193435/24ed9b93/59b8ccd4N03cec407.jpg"
                        alt
                      />
                      <img
                        src="https://img30.360buyimg.com/popWaterMark/jfs/t7390/232/3008585906/285016/56cbb12/59b8ccd4Nc8434af8.jpg"
                        alt
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fooder></fooder>
  </div>
</template>

<script>
import headertop from "../components/headertop";
import fooder from "../components/fooder";
import YButton from "../components/button/button";
// import { setStore } from "../utils/localstore";

export default {
  data() {
    return {
      leftImg: [
        { url: "https://i.loli.net/2018/07/13/5b48ac7766d98.png" },
        { url: "https://i.loli.net/2018/07/13/5b48ac9135c5f.png" },
        { url: "https://i.loli.net/2018/07/13/5b48ac9c2be6c.png" },
        { url: "https://i.loli.net/2018/07/13/5b48aca99c8b6.png" },
        { url: "https://i.loli.net/2018/07/13/5b48a7f468bf2.png" }
      ],
      num: 1,
      big: "",
      value: 1, //数量
      indexFlag: 0,
      goodsLists: [],
      zeronum: 0,
      goods: [],
      orderLists: [],
      cartlists: [],
      lists: []
    };
  },
  computed: {},
  methods: {
    addNum() {
      this.value += 1;
    },
    subtractNum() {
      if (this.value == 1) {
        return;
      } else {
        this.value -= 1;
      }
    },
    // 弹窗方法
    open(t, m) {
      this.$notify.info({
        title: t,
        message: m
      });
    },
    message(m) {
      this.$message.error({
        message: m
      });
    },
    addCart() {
      let lastname = localStorage.getItem("isLogin");
      if (!lastname) {
        this.message("请先登录!");
        return;
      } 
      //如果登录了
      else {
        let index = this.$store.state.cart.cartLists.findIndex(
          val => val.id == this.$store.state.cart.cartLists.id
        );
        if (index != "-1") {
          //存在，数量加
          this.$store.state.cart.cartLists[index].value += this.value;
        } 
        else {
          //不存在添加数据
          this.$store.state.cart.cartLists.checked = true; //默认选中
          this.$store.state.cart.cartLists.push({
            price: this.goodsLists[this.zeronum].price,
            name: this.goodsLists[this.zeronum].name,
            checked: true,
            value: this.value
          });
        }
      }
    },
    payCart() {
     let lastname = localStorage.getItem("isLogin");
      if (!lastname) {
        this.message("请先登录!");
        return;
      } 
      //如果登录了
      else {
        let index = this.$store.state.cart.orderLists.findIndex(
          val => val.id == this.$store.state.cart.orderLists.id
        );
        if (index != "-1") {
          //存在，数量加
          this.$store.state.cart.orderLists[index].value += this.value;
        } 
        else {
          //不存在添加数据
          this.$store.state.cart.orderLists.checked = true; //默认选中
          this.$store.state.order.orderLists.push({
            price: this.goodsLists[this.zeronum].price,
            name: this.goodsLists[this.zeronum].name,
            checked: true,
            value: this.value,
            totalPrice:this.goodsLists[this.zeronum].price * this.value,
          });

        //   for(var i=0;i<this.$store.state.cart.cartLists.length;i++){
        //     if(this.$store.state.cart.cartLists[i].checked){
        //         var cartLists = this.$store.state.cart.cartLists;
        //         this.$store.state.order.orderLists.push({
        //                 name:cartLists[i].name,
        //                 price:cartLists[i].price,
        //                 value:cartLists[i].value,
        //                 totalPrice:this.totalPrice,
        //             });
        //     }
        // }
        // this.$store.state.cart.totalPrice = this.totalPrice;
        // //清空购物车
        // this.$store.state.cart.cartLists = [];
        // console.log(this.$store.state.order.orderLists);
          
        }
      }
      this.$router.push({ path: "/orderCheckout" });
    }
  },
  components: {
    headertop,
    fooder,
    YButton
  },
  mounted() {},
  created() {
    this.goodsLists = this.$store.state.cart.goodsLists;
  }
};
</script>

<style lang="scss" scoped>
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
.store-content {
  clear: both;
  width: 1220px;
  min-height: 600px;
  padding: 0 0 25px;
  margin: 0 auto;
}
.gray-box {
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 60px;
  margin: 20px 0;
  .gallery-wrapper {
    .gallery {
      display: flex;
      width: 540px;
      .thumbnail {
        li:first-child {
          margin-top: 0px;
        }
        li {
          width: 80px;
          height: 80px;
          margin-top: 10px;
          padding: 12px;
          border: 1px solid #f0f0f0;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 5px;
          cursor: pointer;
          &.on {
            padding: 10px;
            border: 3px solid #ccc;
            border: 3px solid rgba(0, 0, 0, 0.2);
          }
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
      .thumb {
        .big {
          margin-left: 20px;
        }
        img {
          display: block;
          width: 440px;
          height: 440px;
        }
      }
    }
  }
  // 右边
  .banner {
    width: 450px;
    margin-left: 10px;
    h4 {
      font-size: 24px;
      line-height: 1.25;
      color: #000;
      margin-bottom: 13px;
    }
    h6 {
      font-size: 14px;
      line-height: 1.5;
      color: #bdbdbd;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sku-custom-title {
      overflow: hidden;
      padding: 8px 8px 18px 10px;
      position: relative;
    }
    .params-name {
      padding-right: 20px;
      font-size: 14px;
      color: #8d8d8d;
      line-height: 36px;
    }
    .num {
      padding: 10px 0 8px 10px;
      display: flex;
      align-items: center;
    }
    .value {
      padding-left: 0;
    }
    .buy {
      position: relative;
      border-top: 1px solid #ebebeb;
      padding: 30px 0 0 10px;
    }
  }
}

.item-info {
  .gray-box {
    padding: 0;
    display: block;
  }
  .img-item {
    width: 1220px;
    // padding: 1vw;
    text-align: center;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}

.no-info {
  padding: 200px 0;
  text-align: center;
  font-size: 30px;
}

.price {
  display: block;
  color: #d44d44;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  i {
    padding-left: 2px;
    font-size: 30px;
  }
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
</style>