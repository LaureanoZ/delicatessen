import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
import store from './store'
import axios from "axios";


// Import Bootstrap
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuelidate);


new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount('#app');



