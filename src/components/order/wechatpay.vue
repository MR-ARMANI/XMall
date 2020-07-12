<template>
  <div>
    <headertop></headertop>

    <div class="container">
      <div class="w" style="padding-bottom: 100px; margin-top: 40px;">
        <div class="gray-box">
          <div class="title">
            <h2>XPay收银台 收款方: Exrick</h2>
            <div></div>
          </div>
          <div>
            <div>
              <div class="box-inner order-info">
                <p class="payment-detail">扫一扫付款（元）</p>
                <p class="payment-money">1.00</p>

                <div class="img-box">
                  <img
                    id="qr"
                    class="pic"
                    src="data:image/png;base64,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"
                  />
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
                <div class="count">请于 04 分 36 秒 内支付</div>
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
                  src="static/images/red.png"
                  width="50px"
                  height="50px"
                  title="支付领红包"
                  class="red"
                />
              </div>
              <div>
                <div class="box-btn">
                  <div>
                    <span></span>
                    <em>
                      <span>¥</span>1.00
                    </em>
                    <y-button
                      :text="payNow"
                      :classStyle="submit?'main-btn':'disabled-btn'"
                      style="width: 120px;height: 40px;font-size: 16px;line-height: 38px"
                      @btnClick="paySuc()"
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
      payNow: "等待支付...",
      submit: false,
      nickName: "",
      money: "",
      info: "",
      email: "",
      dialogVisible: true,
      isCustom: 0,
      imgPath: "static/qr/alipay/custom.png",
      picName: "",
      timeout: false,
      timecount: ""
    };
  },
  components: {
    headertop,
    fooder,
    YButton
  }
};
</script>

<style lang="scss" scoped>
</style>