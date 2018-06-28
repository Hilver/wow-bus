// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from './components/Navbar'
import MainBackground from './components/MainBackground'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

Vue.component('navbar', Navbar)
Vue.component('main-background', MainBackground)
Vue.component('search-bar', SearchBar)
Vue.component('footer-vue', Footer)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
