import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/TodoHeader.vue'
import Input from '../components/TodoInput.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history', //url에 해시를 제거하기 위해 라우터의 history 모드
    routes: [
        {
            path: '/',
            component: Header
        },
        {
            path: '/input',
            component: Input
        }
    ]
})