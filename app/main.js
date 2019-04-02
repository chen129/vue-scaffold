import Vue from 'vue'
import App from './app.vue'
import router from './router'

import './less/index.less'

Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
