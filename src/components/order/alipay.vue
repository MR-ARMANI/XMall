<template>
  <div>
    <headertop></headertop>

    <div class="container">
      <div class="w" style="padding-bottom: 100px; margin-top: 40px;">
        <div class="gray-box">
          <div class="title">
            <h2>XPay收银台 收款方: Chengen</h2>
            <div></div>
          </div>
          <div>
            <div>
              <div class="box-inner order-info">
                <p class="payment-detail">扫一扫付款（元）</p>
                <p class="payment-money">{{ totalPrice }}.00</p>
                
                <div class="img-box">
                  <img id="qr" class="pic" src="../../../static/images/alipay1y.png" />
                  <div class="explain">
                    <img
                      src="https://t.alipayobjects.com/images/T1bdtfXfdiXXXXXXXX.png"
                      alt="扫一扫标识"
                      class="fn-left"
                    />
                    <div class="fn-right">
                      打开手机支付宝
                      <br />扫一扫继续付款
                    </div>
                    
                  </div>
                </div>
                <a
                  href="https://mobile.alipay.com/index.htm"
                  target="_blank"
                  class="download-alipay"
                >首次使用请下载手机支付宝</a>
                <div class="qrguide-area">
                  <img
                    src="https://t.alipayobjects.com/images/rmsweb/T13CpgXf8mXXXXXXXX.png"
                    class="show-img"
                  />
                  <img
                    src="https://t.alipayobjects.com/images/rmsweb/T1ASFgXdtnXXXXXXXX.png"
                    class="close-img"
                  />
                </div>
                <img
                  src="../../../static/images/red.png"
                  width="50px"
                  height="50px"
                  class="red"
                  title="支付领红包"
                  @click="showRed()"
                />
              </div>
              <div>
                <div class="box-btn">
                  <div>
                    <span></span>
                    <em>
                      <span>¥</span>{{ totalPrice }}.00
                    </em>
                    <y-button
                      :text="payNow"
                      @btnClick="toPaySuccess"
                      class="main-btn"
                      style="width: 120px;height: 40px;font-size: 16px;line-height: 38px"
                    ></y-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="el-dialog__wrapper" style="display: none;">
          <div class="el-dialog el-dialog--small" style="top: 15%;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">支付成功</span>
              <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
            </div>
            
            <div class="el-dialog__footer">
              <span class="dialog-footer">
                <button type="button" class="el-button el-button--primary">
                  
                  
                  <span>知道了</span>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div
          class="el-dialog__wrapper"
          style="text-align: center; margin: 0px auto; z-index: 2003; display: none;"
        >
          <div class="el-dialog el-dialog--small" style="top: 15%;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">支付红包</span>
              <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
            </div>
            <div class="el-dialog__body">
              <img src="static/images/alipay-red.jpg" class="qr-red" />
              <span>支付前领个红包吧(每日可领一次)</span>
            </div>
            <div class="el-dialog__footer">
              <span class="dialog-footer">
                <button type="button" class="el-button el-button--primary">
                  
                  
                  <span>领取了</span>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div
          class="el-dialog__wrapper"
          style="display: none; text-align: center; margin: 0px auto;"
        >
          <div class="el-dialog el-dialog--small" style="top: 15%;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">请在备注中输入支付标识号</span>
              <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
            </div>
            
            <div class="el-dialog__footer">
              <span class="dialog-footer">
                <button type="button" class="el-button el-button--primary">
                  
                  
                  <span>知道了</span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      title="支付红包"
      :visible.sync="dialogVisible"
      style="text-align:center;width:50%;margin:0 auto"
    >
      <img src="../../../static/images/11.jpg" class="qr-red" />
      <span style>支付前领个红包吧(每日可领一次)</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">领取了</el-button>
      </span>
    </el-dialog>

    <fooder></fooder>
  </div>
</template>

<script>
import headertop from "../../components/headertop";
import fooder from "../../components/fooder";
import YButton from "../../components/button/button";
export default {
  data() {
    return {
      show: true,
      count: 25,
      userId: "",
      orderTotal: "",
      userName: "",
      tel: "",
      streetName: "",
      checkPrice: "",
      payNow: "确定支付",
      submit: false,
      nickName: "",
      money: "",
      info: "",
      email: "",
      dialogVisible: true,
      isCustom: 0,
      imgPath: "../../../static/qr/alipay/custom.png",
      picName: "",
      timeout: false,
      timecount: "",
      totalPrice:1,
    };
  },
  methods: {
    showRed() {
      this.dialogVisible = true;
    },
    toPaySuccess(){
      this.$router.push({path:'/paysuccess'})
    }
  },
  created() {
    this.totalPrice = this.$store.state.order.unpaid[0].totalPrice
  },
  components: {
    headertop,
    fooder,
    YButton
  }
};
</script>

<style lang="scss" scoped>
.w {
  padding-top: 39px;
}

.order-info {
  padding: 60px 0 55px;
  color: #333;
  background: #fff !important;
  h3 {
    padding-bottom: 14px;
    line-height: 36px;
    text-align: center;
    font-size: 36px;
    color: #212121;
  }
  .payment-detail {
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    color: #999;
  }
}

.box-inner {
  line-height: 60px;
  background: #f9f9f9;
  border-top: 1px solid #e5e5e5;
  box-sizing: border-box;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
  }
  em {
    margin-left: 5px;
    font-size: 24px;
    color: #d44d44;
    font-weight: 700;
    margin-right: 20px;
    span {
      margin-right: 4px;
      font-size: 16px;
    }
  }
}

.box-btn {
  line-height: 60px;
  background: #f9f9f9;
  border-top: 1px solid #e5e5e5;
  box-sizing: border-box;
  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
  }
  em {
    margin-left: 5px;
    font-size: 24px;
    color: #d44d44;
    font-weight: 700;
    margin-right: 20px;
    span {
      margin-right: 4px;
      font-size: 16px;
    }
  }
}

.payment-money {
  text-align: center;
  font-size: 30px;
  color: #d44d44;
  font-weight: 700;
}

.img-box {
  position: relative;
  width: 180px;
  height: auto;
  min-height: 168px;
  margin: 0 auto;
  padding: 6px;
  border: 1px solid #d3d3d3;
  box-shadow: 1px 1px 1px #ccc;
  display: inline-block;
}

.explain {
  margin: 5px 0 12px 0;
}

.pic {
  margin-top: 3px;
}

.fn-left {
  width: 28px;
  height: 28px;
  margin-left: -5px;
}

.fn-right {
  font-size: 13px;
  color: #4d4d4d;
  line-height: 18px;
  margin: -57px 0 0 33px;
}

.download-alipay {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: -5px;
  font-size: 12px;
  color: #a6a6a6;
  text-decoration: underline;
  width: 25%;
  margin: 0 auto;
}

.qrguide-area {
  position: absolute;
  top: 113px;
  left: 713px;
  width: 204px;
  height: 183px;
  cursor: pointer;
}

.show-img {
  display: block;
}

.close-img {
  display: none;
}

.red {
  position: absolute;
  top: 446px;
  left: 1151px;
  width: 47px;
  height: 50px;
  cursor: pointer;
}

.el-dialog--small {
  width: 30%;
}

.qr-red {
  display: block;
  margin: 0 auto;
  width: 70%;
}

.count {
  display: flex;
  position: absolute;
  text-align: center;
  width: 230px;
  flex-direction: column;
  align-items: center;
  margin-left: calc(50% - 115px);
  margin-top: 0px;
  color: #222;
  margin-top: -18px;
}

.timeout {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  color: #222;
  line-height: 200px;
  text-align: center;
  z-index: 1;
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
  }
}
</style>