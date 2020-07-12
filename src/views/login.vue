<template>
  <div class="login v2">
    <div class="wrapper">
      <div class="dialog dialog-shadow" style="display: block; margin-top: -362px;">
        <div class="title">
          <h4>使用 XMall 账号 登录官网</h4>
        </div>
        <div class="content">
          <ul class="common-form">
            <li class="username border-1p">
              <div class="input">
                <input type="text" placeholder="账号" v-model="userName" />
              </div>
            </li>
            <li>
              <div class="input">
                <input type="password" placeholder="密码" v-model="userPwd" />
              </div>
            </li>
            <li class="pr" style="text-align: right">
              <el-checkbox class="auto-login" v-model="autoLogin">记住密码</el-checkbox>
              <a href="/register" class="register">注册 XMall 账号</a>
              <a @click="open('这你都能忘','自己再注册一个吧')" style="padding: 1px 0px 0px 10px;">忘记密码 ?</a>
            </li>
          </ul>
          <div style="margin-top: 25px;">
            <y-button
              :text="logintxt"
              :classStyle="userPwd && userName && logintxt === '登录'?'main-btn':'disabled-btn'"
              @btnClick="submit"
              style="margin: 0;width: 100%;height: 48px;font-size: 18px;line-height: 48px"
            ></y-button>
          </div>
          <div>
            <a href="/home">
              <input
                type="button"
                readonly="readonly"
                class="default-btn"
                value="返回"
                style="margin-top: 10px; margin-bottom: 15px; width: 100%; height: 48px; font-size: 18px; line-height: 48px;"
              />
            </a>
          </div>

          <div class="border"></div>
          <div class="footer">
            <div class="other">其它账号登录：</div>
            <a>
              <img
                @click="open2"
                src="../../static/images/other-login.png"
                style="height: 15px; margin-top: 22px;"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YButton from "../components/button/button";
import { getStore } from "../utils/localstore"
export default {
  data() {
    return {
      autoLogin: false,
      agreement: false,
      logintxt: "登录",
      userName: "",
      userPwd: "",
      isLogin:'',
    };
  },
  created(){
    this.isLogin = getStore('isLogin');
  },
  methods: {
    open2() {
      this.$notify({
        title: "待开发",
        message: "此功能开发中...",
        type: "warning"
      });
    },
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

    submit() {
      let userName = this.userName;
      let userPwd = this.userPwd;
      this.logintxt = "登录";
      if (!userName || !userPwd) {
        this.message("账号或者密码不能为空!");
        return;
      }
      let user = this.$store.state.login.user;


      //   方法 一
      let userinfo = user.find(item => {
        return item.username == userName && item.password == userPwd;
      });
      if (userinfo) {
        this.$store.state.isLogin = true;
        this.$store.state.login.loginNum = userinfo.id - 1;
        this.$router.push('/home');
        localStorage.setItem("isLogin", "true");
      } else {
        this.message("账号或者密码错误!");
      }


      //   方法 二
      // for (var i = 0; i < user.length; i++) {
      //   if (
      //     this.userName == user[i].username &&
      //     this.userPwd == user[i].password
      //   ) {
      //     this.$store.state.isLogin = true;
      //     this.$store.state.login.loginNum = user[i].id - 1;
      //     console.log(this.$store.state.login.user);
      //     this.$router.push('/home');
      //     localStorage.setItem("isLogin", "true");
      //     return;
      //   }
      // }
      //   this.message("账号或者密码错误!");
      //   this.userName = "";
      //   this.userPwd = "";
      
    }
  },
  mounted() {
    this.open("登录提示", "测试体验账号: admin |  密码: 123");
  },
  components: {
    YButton
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: content-box;
}

.login {
  overflow-x: hidden;
  overflow-y: hidden;
  .input {
    height: 50px;
    display: flex;
    align-items: center;
    input {
      font-size: 16px;
      width: 100%;
      height: 100%;
      padding: 10px 15px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 6px;
      text-align: left;
    }
  }
  .wrapper {
    background: url("../../static/images/bg_9b9dcb65ff.png") repeat;
    background-size: 100px;
    min-height: 800px;
    min-width: 630px;
  }
}

.v2 .dialog {
  width: 450px;
  border: 1px solid #dadada;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  margin-left: -225px;
  position: absolute;
  .title {
    background: linear-gradient(#fff, #f5f5f5);
    height: auto;
    overflow: visible;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    position: relative;
    background-image: url("../../static/images/smartisan_4ada7fecea.png");
    background-size: 140px;
    background-position: top center;
    background-repeat: no-repeat;
    height: 92px;
    margin: 23px 0 50px;
    padding: 75px 0 0;
    box-shadow: none;
    h4 {
      padding: 0;
      text-align: center;
      color: #666;
      border-bottom: 1px solid #dcdcdc;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      font-weight: 700;
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      margin: 0;
      padding: 0;
      border-bottom: 0;
      box-shadow: none;
      line-height: 1em;
      height: auto;
      color: #333;
      font-weight: 400;
    }
  }
  .content {
    padding: 0 40px 22px;
    height: auto;
    .common-form {
      li {
        clear: both;
        margin-bottom: 15px;
        position: relative;
      }
    }
  }
}

.dialog-shadow,
.v2 .bbs .dialog-shadow,
.v2 .dialog-shadow {
  box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
    0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
    0 10px 20px -10px rgba(0, 0, 0, 0.04);
}

.wrapper {
  background: url("../../static/images/con-bg_04f25dbf8e.jpg") repeat-x;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 737px;
}
.dialog {
  background: url("../../static/images/dialog-gray-bg.png") #fff bottom repeat-x;
  border-radius: 12px;
  display: none;
  margin: -163px 0 0 -218px;
  width: 436px;
  position: fixed;
  left: 50%;
  top: 50%;
}
.dialog .title h4 {
  border-bottom: #d1d1d1 solid 1px;
  box-shadow: 0 2px 6px #d1d1d1;
  color: #666;
  font-size: 20px;
  height: 61px;
  line-height: 61px;
  padding: 0 0 0 35px;
}
.common-form li {
  clear: both;
  margin-bottom: 15px;
  position: relative;
}
.auto-login {
  position: absolute;
  top: 0px;
  left: 2px;
  color: #999;
}
.register {
  padding: 1px 10px 0;
  border-right: 1px solid #ccc;
}
.border {
  margin-top: 10px;
  border-bottom: 1px solid #ccc;
}
.other {
  margin: 20px 5px 0 0;
  width: auto;
  color: #bbb;
  font-size: 12px;
  cursor: default;
  color: #999;
}
.footer {
  display: flex;
  flex-direction: row;
}
.agree {
  margin-bottom: 10px;
  color: #999;
}

.registered {
  h4 {
    padding: 0;
    text-align: center;
    color: #666;
    border-bottom: 1px solid #dcdcdc;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-weight: 700;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
  }
}

#wait {
  text-align: left;
  color: #999;
  margin: 0;
}
</style>