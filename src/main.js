import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VModal from 'vue-js-modal'
import VueScrollTo from 'vue-scrollto'
import './assets/main.scss'
import './assets/css/bootstrap-grid.min.css'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VModal)
Vue.use(VueScrollTo, {
  easing: 'ease-in-out'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
