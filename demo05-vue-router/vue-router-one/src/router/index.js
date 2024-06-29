import {createRouter, createWebHashHistory} from 'vue-router'
import HelloWorld from "../components/HelloWorld.vue";
import User from "../components/User.vue";
import Order from "../components/Order.vue";
import UserProfile from "../components/user/UserProfile.vue";
import UserPosts from "../components/user/UserPosts.vue";

//1.配置路由表
const routes = [
    {path: '/hello', component: HelloWorld},
    {
        path: '/sys/user/:id/:name/:age',
        name: 'User',
        component: User,
        children: [
            {
                path: 'profile',
                name: 'UserProfiles',
                component: UserProfile,
            },
            { //不能使用/，是继承父级路径的
                path: 'posts',
                name: 'Posts',
                component: () => import('../components/user/UserPosts.vue'),
            }
        ]
    },
    {
        path: '/sys/userDetails',
        name: 'userDetails',
        component: User,
    },
    {path: '/sys/order', component: Order}
]

//2。创建路由器
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 添加前置守卫
router.beforeEach(async(to,from)=>{
    console.log("to",to)
    console.log("from",from)
    if (to.path === '/sys/userDetails') {
        alert("请登录");
        return '/';
    }
    return true;
})

//3 导出
export {router}
