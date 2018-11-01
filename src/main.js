// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import login from './login'
import router from './router'
import iView from 'iview'
import vueResource from 'vue-resource'
import 'iview/dist/styles/iview.css'
import global_ from './global/Global'

Vue.config.productionTip = false
Vue.use(iView);//引入iview
Vue.use(vueResource);//http请求支持包
Vue.prototype.GLOBAL=global_; //全局变量
Vue.http.options.emulateJSON = true; //post data使用FormData
Vue.http.options.emulateHTTP = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { login },
  template: '<login/>'
})
