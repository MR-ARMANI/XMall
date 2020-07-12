import Vue from 'vue'


// 引入初始化样式
import "./assets/css/base.css";
import "swiper/css/swiper.min.css";
import "./assets/css/common.scss"
import "./assets/css/index.scss"
import "./assets/css/mixin.scss"
import "./assets/css/reset.scss"
import "./assets/css/theme.scss"

// 引入elementUi框架
// $npm i element-ui -S
// $npm install babel-plugin-component -D
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import App from './App.vue'
import router from './router'
import store from './store'

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3000"
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
