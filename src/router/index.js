import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

function component (fold, name = fold) {
    const com = () => ({
        component: import(`@/page/${fold}/${name}`),
        delay: 200,
        timeout: 10000
    })
    return {
        render (h) {
            return h(com, {})
        }
    }
}

export default new Router({
    linkActiveClass: 'active',
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/loginSign',
            name: 'loginSign',
            redirect: '/loginSign/logIn',
            component: component('loginSign'),
            meta: {
                loginState: false
            },
            children: [
                {
                    path: '/loginSign/logIn',
                    name: 'logIn',
                    component: component('logIn')
                }, {
                    path: '/loginSign/signUp',
                    name: 'signUp',
                    component: component('signUp')
                }
            ]
        },
        {
            path: '/treemenu',
            name: 'treemenu',
            component: component('treemenu')
        },
        {
            path: '/index',
            name: 'index',
            redirect: '/home',
            component: component('index'),
            meta: {
                title: '首页',
                loginState: false
            },
            children: [
                {
                    path: '/home',
                    name: 'home',
                    redirect: '/home/handpick',
                    component: component('home'),
                    meta: {
                        requireAuth: false
                    },
                    children: [
                        {
                            path: '/home/handpick',
                            name: 'handpick',
                            component: component('home', 'handpick')
                        }, {
                            path: '/home/gifts/:productName',
                            name: 'gifts',
                            component: component('home', 'gifts')
                        }, {
                            path: '/home/bag/:productName',
                            name: 'bag',
                            component: component('home', 'bag')
                        }
                    ]
                }, {
                    path: '/search',
                    name: 'search',
                    redirect: '/search/searchList',
                    component: component('search'),
                    meta: {
                        requireAuth: false
                    },
                    children: [
                        {
                            path: '/search/searchList',
                            name: 'searchList',
                            component: component('searchList')
                        },
                        {
                            path: '/search/giftInfo',
                            name: 'giftInfo',
                            component: component('giftInfo')
                        }

                    ]
                }, {
                    path: '/messager',
                    name: 'messager',
                    redirect: '/messager/chatList',
                    component: component('messager'),
                    meta: {
                        requireAuth: true
                    },
                    children: [
                        {
                            path: '/messager/chatList',
                            name: 'chatList',
                            component: component('chatList')
                        }, {
                            path: '/messager/interAction',
                            name: 'interAction',
                            redirect: '/messager/interAction/goodFriend',
                            component: component('interAction'),
                            children: [
                                {
                                    path: '/messager/interAction/disCover',
                                    name: 'disCover',
                                    component: component('disCover')
                                }, {
                                    path: '/messager/interAction/goodFriend',
                                    name: 'goodFriend',
                                    component: component('goodFriend'),
                                }, {
                                    path: '/messager/interAction/readyFollow',
                                    name: 'readyFollow',
                                    component: component('readyFollow')
                                }
                            ]
                        }
                    ]
                }, {
                    path: '/mine',
                    name: 'mine',
                    meta: {
                        requireAuth: true
                    },
                    component: component('mine')
                }, {
                    path: '/giftDetails',
                    name: 'giftDetails',
                    component: component('giftDetails')
                }, {
                    path: '/allMessage',
                    name: 'allMessage',
                    component: component('allMessage')
                }
            ]
        }
    ]
})
