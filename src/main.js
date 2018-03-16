import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ECharts from 'echarts'
import VeLine from 'v-charts/lib/line'
import VePie from 'v-charts/lib/pie'
import VeHistogram from 'v-charts/lib/histogram'
import VeRing from 'v-charts/lib/ring'
import store from './store'
import '@/style/index.scss'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(ECharts)
Vue.component('ve-line', VeLine)
Vue.component('ve-pie', VePie)
Vue.component('ve-histogram', VeHistogram)
Vue.component('ve-ring', VeRing)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
