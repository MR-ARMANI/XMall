<template>
  <div>
    <headertop></headertop>

    <div  class="w">
      <div  class="content">
        <div  class="account-sidebar">
          <div  class="avatar gray-box">
            <div >
              <img  src="../../static/images/11.jpg" />
              <h5 >{{this.$store.state.user}}</h5>
            </div>
            <div  class="box-inner">
              <ul  class="account-nav">
                <li v-for="(item,index) in usernav" :key="index" :class="{'current':$store.state.index == index}" @click="$store.state.index = index">
                  <router-link  :to="item.path">{{item.name}}</router-link >
                </li>
                <li>
                  <a href="javascript:;" @click="edit">退出</a>
                </li>
              </ul>
            </div>
          </div>
        </div>


      <div class="account-content">
            <router-view></router-view>
      </div>
       
      </div>
    </div>

   

    <fooder></fooder>
  </div>
</template>

<script>
import headertop from "../components/headertop";
import fooder from "../components/fooder";
export default {
  data() {
    return {
      // number:0,
      usernav: [
          {name: '账户资料', path: '/user/information'},
          {name: '收货地址', path: '/user/addressList'},
          {name: '我的优惠', path: '/user/coupon'},
          {name: '售后服务', path: '/user/support'},
          {name: '以旧换新', path: '/user/aihuishou'},
        ],
    }
  },
  methods: {
    edit(){
      localStorage.removeItem("isLogin");
      this.$router.push({path:'/home'});
    }
  },
  components: {
    headertop,
    fooder
  }
};
</script>

<style lang="scss" scoped>
 .w {
    padding-top: 40px;
  }

  .content {
    display: flex;
    height: 100%;
  }
 .account-sidebar {
    width: 210px;
    border-radius: 6px;
    .avatar {
      padding-top: 20px;
      border-radius: 10px;
      text-align: center;
      img {
        width: 168px;
        height: 168px;
      }
      h5 {
        font-size: 18px;
        line-height: 48px;
        font-weight: 700;
      }
    }
    .account-nav {
      padding-top: 15px;
      li {
        position: relative;
        height: 48px;
        border-top: 1px solid #EBEBEB;
        line-height: 48px;
        &:hover {
          a {
            position: relative;
            z-index: 1;
            height: 50px;
            background-color: #98AFEE;
            line-height: 50px;
            color: #FFF;
          }

        }
        a {
          display: block;
        }
        &.current {
          a {
            position: relative;
            z-index: 1;
            height: 50px;
            background-color: #98AFEE;
            line-height: 50px;
            color: #FFF;
          }
        }

      }
    }
  }

  .account-content {
    margin-left: 20px;
    flex: 1;
  }

</style>