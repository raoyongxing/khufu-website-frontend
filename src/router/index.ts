import { 
    createRouter, 
    createWebHashHistory, 
    RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'root',
        alias: ['/home', '/index'],
        component: ()=> import('@/pages/home/index.ts')
    },
    {
        path: '/about',
        name: 'about',
        component: ()=> import('@/pages/about/index.ts')
    },
    {
        path: '/blog',
        name: 'blog',
        component: ()=> import('@/pages/blog/index.ts'),
        meta: {
            rootBg: false
        }
    },
    {
        path: '/contract',
        name: 'contract',
        component: ()=> import('@/pages/contract/index.ts'),
        meta: {
            rootBg: false
        }
    }
]



const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
