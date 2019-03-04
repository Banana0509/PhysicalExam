// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import login from './login'
import router from './router'
import iView from 'iview'
import vueResource from 'vue-resource'
import 'iview/dist/styles/iview.css'
import global_ from './global/Global'
import vuex from 'vuex'
import XLSX from 'xlsx/dist/xlsx.full.min'

Vue.config.productionTip = false
Vue.use(iView);//引入iview
Vue.use(vueResource);//http请求支持包
Vue.use(XLSX);
Vue.prototype.GLOBAL=global_; //全局变量
Vue.use(vuex); //全局状态管理控件
Vue.http.options.emulateJSON = true; //post data使用FormData
Vue.http.options.emulateHTTP = true;
/* eslint-disable no-new */

/**
 * vuex全局状态管理模式
 * @type {Store}
 */
const store = new vuex.Store({
  name: 'store',
  state: {
    isShowLogin: true
  },
  mutations: {
    setIsShowLogin(state) {  //使用方式 store.commit("set",true)
      state.isShowLogin = !state.isShowLogin;
      console.log('change store setIsShowLogin = ' + state.isShowLogin);
    }
  }
});

/**
 * vue根实例
 */
new Vue({
  el: '#app',
  router,
  store,  //vuex注入顶部，底下的部件都可以通过this.$store.state访问数据
  components: {login},
  template: '<login/>'
});




