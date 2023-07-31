import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VModal from 'vue-js-modal'
import AOS from 'aos'
import './assets/main.scss'
import './assets/css/bootstrap-grid.min.css'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VModal)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      anchorPlacement: 'top-bottom'
    })
  },
}).$mount('#app')
