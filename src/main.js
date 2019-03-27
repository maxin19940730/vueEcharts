import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入vue-resource
import VueResource from 'vue-resource'
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
import 'echarts/theme/macarons.js' //echarts 主题
import App from './App.vue';
import chartTest1 from './routers/chartTest1.vue';
import chartTest2 from './routers/chartTest2.vue';
import chartTest3 from './routers/chartTest3.vue';
import chartTest4 from './routers/chartTest4.vue';
import page from './routers/page.vue';
import configPage from './routers/configPage.vue';
import './components';
// 调用mock的API，使Ajax能够捕获随机数据
require('./mock')
Vue.use(VueRouter)
// 注册resource
Vue.use(VueResource)
Vue.component('v-chart', ECharts)
const routes = [
  { path: '/chartTest1', component: chartTest1 },
  { path: '/chartTest2', component: chartTest2 },
  { path: '/chartTest3', component: chartTest3 },
  { path: '/chartTest4', component: chartTest4 },
  { path: '/page', component: page },
  { path: '/configPage', component: configPage }
]

const router = new VueRouter({
  mode:'history',
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
