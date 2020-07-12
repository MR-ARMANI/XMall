<template>
  <div>
    <div class="headertop">
      <div class="container">
        <div class="lefe_logo fl">
          <router-link class="logo" to="/home"></router-link>
        </div>

        <!-- 搜索框 -->
        <el-autocomplete
          class="el_input_search"
          popper-class="my-autocomplete"
          v-model="state"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
        >
          <i class="el-icon-search el-input__icon" slot="suffix" ></i>
          <template slot-scope="{ item }">
            <div class="name">{{ item.value }}</div>
          </template>
        </el-autocomplete>

        <div class="nav-aside fr">
          <a href="javsectipt:;" class="my" @click="toUser"></a>

          <a href="javsectipt:;" class="shopcart" @click="toCart">
            <!-- <i class="shopcart_num"></i> -->
            <!--购物车显示块-->
            <div class="nav-user-wrapper pa active">
              <div class="nav-user-list">
                <div >
                <!-- 有数据的时候 -->
                <div class="full" v-if="iscar">
                  <div class="nav-cart-items">
                    <ul>
                      <li class="clearfix"  v-for="(item,index) in this.$store.state.cart.cartLists"
                    :key="index">
                        <div class="cart-item">
                          <div class="cart-item-inner">
                            <a>
                              <div class="item-thumb">
                                <img src="https://i.loli.net/2018/07/13/5b48ac7766d98.png" />
                              </div>
                              <div class="item-desc">
                                <div class="cart-cell">
                                  <h4>
                                    <a href="javascript:;">{{item.name}}</a>
                                  </h4>
                                  <h6>
                                    <span class="price-icon">¥</span>
                                    <span class="price-num">{{item.price}}</span>
                                    <span class="item-num">x {{item.value}}</span>
                                  </h6>
                                </div>
                              </div>
                            </a>
                            <div class="del-btn del">删除</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="nav-cart-total" v-for="(item,index) in this.$store.state.cart.cartLists"
                    :key="index">
                    <p>
                      共
                      <strong>{{item.value}}</strong> 件商品
                    </p>
                    <h5>
                      合计：
                      <span class="price-icon">¥</span>
                      <span class="price-num">{{item.price * item.value}}</span>
                    </h5>
                    <h6>
                      <input
                        type="button"
                        readonly="readonly"
                        class="main-btn"
                        value="去购物车"
                        style="height: 40px; width: 100%; margin: 0px; color: rgb(255, 255, 255); font-size: 14px; line-height: 38px;"
                      />
                    </h6>
                  </div>
                  
                </div>
                <!-- 没有数据的时候 -->
                <div class="cart-con" v-else style="height: 313px; text-align: center;">
                  <p>您的购物车竟然是空的!</p>
                </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="nav-sub">
      <div class="nav-sub-wrapper">
        <div class="container">
          <ul class="nav-list2">
            <li v-for="(item,index) in navList" :key="index" @click="$store.state.navindex = index">
              <router-link
                :class="{'active':$store.state.navindex == index}"
                :to="item.href"
              >{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartLists: [],
      iscar: false,
      lastname: [],
      restaurants: [],
      state: "",
      navindex: 0,
      navList: [
        { name: "首页", href: "/home" },
        { name: "全部", href: "/all" },
        { name: "周边", href: "/zhoubian" },
        { name: "手机", href: "/all" },
        { name: "配件", href: "/all" },
        { name: "服饰", href: "/all" },
        { name: "箱包", href: "/all" },
      ]
    };
  },
  methods: {
    toUser() {
      let lastname = localStorage.getItem("isLogin");
      if (!lastname) {
        this.$router.push({ path: "/login" });
      } else {
        this.$router.push({ path: "/user" });
      }
    },
    toCart() {
      let lastname = localStorage.getItem("isLogin");
      if (!lastname) {
        this.$router.push({ path: "/login" });
      } else {
        this.$router.push({ path: "/cart" });
      }
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "蓝牙耳机" },
        { value: "坚果Pro3" },
        { value: "抖音文创" },
        { value: "移动电源" },
        { value: "旅行箱" },
        { value: "T恤" },
        { value: "扫地机器人" },
        { value: "数据线" },
        { value: "充电器" },
        { value: "音响" },
        { value: "手机壳" },
        { value: "拉杆箱" },
        { value: "空气净化器" },
        { value: "帆布鞋" }
      ];
    },
  },
  computed: {
    cart(){
      return this.$store.state.cart.cartLists;
    }
  },
  watch: {
    cart() {
      if (this.$store.state.cart.cartLists != "") {
        this.iscar = true;
      } else {
        this.iscar = false;
      }
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  created() {
    if (this.$store.state.cart.cartLists != "") {
      this.iscar = true;
    }
    else{
      this.iscar = false
    }
   this.cartLists = this.$store.state.cart.cartLists
    
  }
};
</script>

<style lang="scss" scoped>
.el_input_search {
  margin-left: 400px;
  margin-top: 20px;
}

//搜索
.el_input_search {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}

.headertop {
  width: 100%;
  height: 80px;
  background: #27282a;
  position: relative;
  .lefe_logo {
    width: 50px;
    height: 40px;
    position: absolute;
    top: 50%;
    margin-top: -25px;
    .logo {
      text-align: center;
      display: block;
      width: 50px;
      height: 40px;
      background: url("../../static/images/global-logo-red@2x.png") 0 0
        no-repeat;
      background-size: cover;
    }
  }
  .nav-aside {
    width: 100px;
    height: 80px;
    margin-top: 25px;
    position: relative;
    .my {
      display: block;
      width: 20px;
      height: 20px;
      background: url("../../static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png") -155px
        0;
      background-size: 240px 107px;
      transition: none;
    }
    .my:hover {
      background: url("../../static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png") -5px
        0;
      background-size: 240px 107px;
      transition: none;
    }
    .shopcart {
      display: block;
      width: 30px;
      height: 20px;
      background: url("../../static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png") -150px -22px;
      background-size: 240px 107px;
      // background-position: -150px -22px;
      position: absolute;
      left: 40px;
      top: 0;

      // &:hover {
      //   a:before {
      //     background-position: -5px 0;
      //   }
      //   .nav-user-wrapper {
      //     top: 10px;
      //     visibility: visible;
      //     opacity: 1;
      //     transition: opacity .15s ease-out;
      //   }
      // }

      .shopcart_num {
        background: #969696;
        text-align: center;
        font-style: normal;
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
        position: relative;
        left: 30px;
      }
    }
    .shopcart:hover {
      display: block;
      width: 30px;
      height: 20px;
      background: url("../../static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png")
        0 -22px;
      background-size: 240px 107px;
      // background-position: 0 -22px;
      .nav-user-wrapper.active {
        display: block;
      }
    }
  }
}
.nav-sub {
  width: 100%;
  position: relative;
  z-index: 20;
  height: 90px;
  background: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  .nav-sub-wrapper {
    width: 100%;
    padding: 31px 0;
    position: relative;
    background-color: #fff;
    .container {
      display: flex;
      justify-content: space-between;
      .nav-list2 {
        height: 28px;
        line-height: 28px;
        display: flex;
        align-items: center;
        height: 100%;
        li {
          position: relative;
          float: left;
          margin-left: 2px;
          a {
            display: block;
            padding: 0 10px;
            color: #666;
            font-style: normal;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.15s ease-out;
          }
          a:hover {
            color: #5079d9;
          }
          a.active {
            font-weight: 700;
          }
        }
        li::before {
          content: " ";
          position: absolute;
          left: 0;
          top: 13px;
          width: 2px;
          height: 2px;
          background: #bdbdbd;
        }
        li:first-child {
          margin-left: 0;
        }
      }
    }
  }
}

.nav-user-wrapper {
  top: 18px;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s ease-out;
}

.nav-user-wrapper {
  width: 168px;
  transform: translate(-50%);
  left: 50%;
}

.nav-user-wrapper.active {
  top: 0;
  left: -120px;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s ease-out;
  display: none;
}
> a {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: block;
  right: 0;
  z-index: 1;
  &:before {
    display: block;
    width: 30px;
    height: 100%;
    content: " ";
    background: url("../../static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png")
      0 -22px;
    background-size: 240px 107px;
    background-position: -150px -22px;
  }
}

.nav-user-wrapper {
  right: 0;
  width: 360px;
  .nav-user-list {
    &:before {
      right: 34px;
    }
  }
}

.nav-user-wrapper {
  position: absolute;
  z-index: 30;
  padding-top: 41px;
  opacity: 0;
  visibility: hidden;
  top: -3000px;
  .nav-user-list {
    position: relative;
    padding-top: 20px;
    background: #fff;
    border: 1px solid #d6d6d6;
    border-color: rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    z-index: 10;
    .full {
      border-radius: 8px;
      overflow: hidden;
    }
    &:before {
      position: absolute;
      content: " ";
      background: url("../../static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png")
        no-repeat -49px -43px;
      background-size: 240px 107px;
      width: 20px;
      height: 8px;
      top: -8px;
      margin-left: -10px;
    }
  }
}

.cart-con {
  /*display: flex;*/
  text-align: center;
  position: relative;
  p {
    padding-top: 185px;
    color: #333333;
    font-size: 16px;
  }
}

.cart-con:before {
  position: absolute;
  content: " ";
  left: 50%;
  transform: translate(-50%, -70%);
  top: 50%;
  width: 76px;
  height: 62px;
  background: url("../../static/images/cart-empty-new.png") no-repeat;
  background-size: cover;
}

用户 .user {
  margin-left: 41px;
  width: 36px;
  &:hover {
    a:before {
      background-position: -5px 0;
    }
    .nav-user-wrapper {
      top: 18px;
      visibility: visible;
      opacity: 1;
      -webkit-transition: opacity 0.15s ease-out;
      transition: opacity 0.15s ease-out;
    }
  }
  > a {
    position: relative;
    width: 36px;
    height: 20px;
    display: block;
    text-indent: -9999px;
    &:before {
      content: " ";
      position: absolute;
      left: 8px;
      top: 0;
      width: 20px;
      height: 20px;
      background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) -155px
        0;
      background-size: 240px 107px;
      transition: none;
    }
  }
  li + li {
    text-align: center;
    position: relative;
    border-top: 1px solid #f5f5f5;
    line-height: 44px;
    height: 44px;
    color: #616161;
    font-size: 12px;
    &:hover {
      background: #fafafa;
    }
    a {
      display: block;
      color: #616161;
    }
  }
  .nav-user-avatar {
    > div {
      position: relative;
      margin: 0 auto 8px;
      width: 46px;
      height: 46px;
      text-align: center;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 50%;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
      }
      .avatar {
        border-radius: 50%;
        display: block;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .name {
      margin-bottom: 16px;
      font-size: 12px;
      line-height: 1.5;
      text-align: center;
      color: #757575;
    }
  }
  .nav-user-wrapper {
    width: 168px;
    transform: translate(-50%);
    left: 50%;
  }
  .nav-user-list {
    width: 168px;
    &:before {
      left: 50%;
    }
  }
}

.nav-user-wrapper {
  right: 0;
  width: 360px;
  .nav-user-list {
    &:before {
      right: 34px;
    }
  }
}
.nav-user-list {
  padding: 0;
  width: 100%;
  .full {
    border-radius: 8px;
    overflow: hidden;
  }
  .nav-cart-items {
    max-height: 363px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .cart-item {
    height: 120px;
    width: 100%;
    overflow: hidden;
    border-top: 1px solid #f0f0f0;
    &:hover {
      background: #fcfcfc;
      .del {
        display: block;
      }
    }
  }
  li:first-child .cart-item:first-child {
    border-top: none;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }
  .cart-item-inner {
    padding: 20px;
    position: relative;
  }
  .item-thumb {
    position: relative;
    float: left;
    width: 80px;
    height: 80px;
    border-radius: 3px;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
      border: 1px solid #f0f0f0;
      border: 0 solid transparent;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
      border-radius: 3px;
    }
    img {
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 3px;
      overflow: hidden;
    }
  }
  .item-desc {
    margin-left: 98px;
    display: table;
    width: 205px;
    height: 80px;
    h4 {
      color: #000;
      width: 185px;
      overflow: hidden;
      word-break: keep-all;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 10px;
    }
    .attrs span {
      position: relative;
      display: inline-block;
      margin-right: 20px;
      font-size: 14px;
      line-height: 14px;
      color: #999;
    }
    .attrs span:last-child {
      margin-right: 0;
    }
    h6 {
      color: #cacaca;
      font-size: 12px;
      line-height: 14px;
      margin-top: 20px;
      span {
        display: inline-block;
        font-weight: 700;
        color: #cacaca;
      }
      .price-icon,
      .price-num {
        color: #d44d44;
      }
      .price-num {
        margin-left: 5px;
        font-size: 14px;
      }
      .item-num {
        margin-left: 10px;
      }
    }
  }
  .cart-cell {
    display: table-cell;
    vertical-align: middle;
  }
  .del {
    display: none;
    overflow: hidden;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.nav-cart-total {
  box-sizing: content-box;
  position: relative;
  padding: 20px;
  height: 40px;
  background: #fafafa;
  border-top: 1px solid #f0f0f0;
  border-radius: 0 0 8px 8px;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.5),
    0 -3px 8px rgba(0, 0, 0, 0.04);
  background: -webkit-linear-gradient(#fafafa, #f5f5f5);
  background: linear-gradient(#fafafa, #f5f5f5);
  p {
    margin-bottom: 4px;
    line-height: 16px;
    font-size: 12px;
    color: #c1c1c1;
  }
  h5 {
    line-height: 20px;
    font-size: 14px;
    color: #6f6f6f;
    span {
      font-size: 18px;
      color: #de4037;
      display: inline-block;
      font-weight: 700;
    }
    span:first-child {
      font-size: 12px;
      margin-right: 5px;
    }
  }
  h6 {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 108px;
  }
}
</style>