import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import echarts from 'echarts'
// import ECharts from 'vue-echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/body.scss'
Vue.use(ElementUI)
// Vue.prototype.$echarts=echarts
Vue.config.productionTip = false
// Vue.component('v-chart',ECharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
