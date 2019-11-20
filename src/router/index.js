import Vue from 'vue'
import Router from 'vue-router'
import Contents from '@/components/Contents'
import CarWrite from '../components/CarWrite'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new Router({
    routes: [
        {
            path: '/',
            component: Contents
        },
        {
            path: '/Car-Write',
            component: CarWrite
        }
    ]
})
