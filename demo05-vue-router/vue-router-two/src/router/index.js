import {createRouter,createMemoryHistory} from 'vue-router'
import User from "@/components/User.vue";
import Order from "@/components/Order.vue";
import UserProfile from "@/components/user/UserProfile.vue";


// 配置路由表
const routes = [
    {
        path: '/user',
        name: 'user',
        component: User,
        children: [
            {
                path: 'userPosts',
                name: 'userPosts',
                component: () => import('../components/user/UserPosts.vue')
            },
            {
                path: 'userProfile',
                name: 'userProfile',
                component: UserProfile
            }
        ]
    },
    {
        path: '/order/:id',
        name: 'order',
        component: Order
    }
]

// 创建路由器
const router = createRouter({
    history: createMemoryHistory(),
    routes: routes
});

//导出
export default router;