import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const asideMenuRoutes = [
    {
        path: '/',
        meta: {
            title: '首页',
            mdi: 'mdi-home'
        },
        component: () => import('@/views/Home')
    },
    {
        path: '/t1',
        meta: {
            title: 't1',
            mdi: 'mdi-github'
        },
        component: () => import('@/views/level-view/Level1'),
        children: [
            {
                path: 't1-1',
                meta: {
                    title: 't1-1',
                    mdi: 'mdi-home'
                },
                component: () => import('@/views/level-view/Level2'),
                children: [
                    {
                        path: 't1-1-1',
                        meta: {
                            title: 't1-1-1',
                            mdi: 'mdi-home',
                            liveOn: '2021-09-24'
                        },
                        component: () => import('@/views/View404')
                    }
                ]
            }
        ]
    },
    {
        path: '/t2',
        meta: {
            title: 't2',
            mdi: 'mdi-lock-check'
        },
        component: () => import('@/views/level-view/Level1'),
        children: [
            {
                path: 't2-1',
                meta: {
                    title: 't2-1',
                    mdi: 'mdi-home',
                    liveOn: '2021-10-06'
                },
                component: () => import('@/views/View404')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: asideMenuRoutes.concat([
        {
            path: '/md',
            meta: {
                title: 'MD'
            },
            component: () => import('@/views/md/Viewer')
        },
        {
            path: '*',
            component: () => import('@/views/View404')
        }
    ])
})

export default router

export {
    asideMenuRoutes
}
