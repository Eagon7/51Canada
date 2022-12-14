import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import router from './router'
import { RouterMount } from 'uni-simple-router'
import routerLink from './node_modules/uni-simple-router/component/router-link.vue'
import store from './store'
Vue.component('router-link',routerLink)
Vue.use(router)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    store,...App
})
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif


// #endif

// // #ifdef VUE3
// import { createSSRApp } from 'vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// // #endif