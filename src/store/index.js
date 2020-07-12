import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import login from './login.js'
import cart from './cart.js'
import order from './order.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index:0,            //个人中心的左侧导航栏index值 点解切换index
    navindex:0,         //导航条的左侧导航栏index值 点解切换index
    isLogin: false,     //判断是否登录
    user:'一拳超人'
  },
  mutations,
  actions: {
  },
  modules: {
    login,
    cart,
    order,
  }
})
