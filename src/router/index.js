import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import home from "./routers/home"
import all from "./routers/all"
import goodslist from "./routers/goodslist"
import login from "./routers/login"
import register from "./routers/register"
import user from "./routers/user"
import cart from "./routers/cart"
import orderCheckout from "./routers/orderCheckout"
import wechatpay from "./routers/wechatpay"
import alipay from "./routers/alipay"
import paysuccess from "./routers/paysuccess"
import zhoubian from "./routers/zhoubian"

const routes = [
    {
      path:'/',
      redirect:"/home",
    },
    home,                   //首页
    all,                    //全部
    goodslist,              //商品详情
    login,                  //登录
    register,               //注册
    user,                     //个人中心
    cart,                   //购物车
    orderCheckout,          //订单
    wechatpay,              //微信支付
    alipay,                 //支付宝支付
    paysuccess,             //支付成功
    zhoubian                //周边
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
