import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUi from 'element-ui'

Vue.config.productionTip = false
Vue.use(ElementUi)

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
