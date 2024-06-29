<script setup>
import HelloWorld from './components/HelloWorld.vue'

const paramsObj = {
  name: 'User',
  params: {
    id: '008',
    name: 'zhang',
    age: 20
  }
}
</script>

<template>
  <!--
    vue-route使用
    1。引入vue-route依赖
    2。配置路由表
    3。创建路由器
    4。导出路由器
    5。在main.js中给vue实例使用路由器

    路径变量
    在路径后面使用:变量名，在对应的路由页面使用$route.params中取值

    嵌套路由
    在路由表中使用children:[]定义子级，子级路径要和父级相拼接
    拼接的完整路径要用到router-link标签中的to中去

    编程式导航
    useRoute:可拿到跳转前组件的信息
    useRouter:路由器，可以控制页面前进与后退
    路径传参：params 两种写法：
      <RouterLink to="/sys/user/007/janna/30">Go User</RouterLink>
      <RouterLink :to="paramsObj">GoUser_ParamsObj</RouterLink>
    查询参数：query 两种写法
      <RouterLink to="/sys/userDetails?id=009&name=zhang&age=21">queryJoin</RouterLink>
      <RouterLink :to="{ push: '/userDetails', query:{ id: '009', name: 'zhang', age: 22 } }">queryObj</RouterLink>
    两种接法：
      1。在js中使用useRoute对象，在页面中直接作用route.params或route.query中取
      2。直接在页面中使用$route.query或$route.params中取
      切忌：传参时是path参数，而使用router时是push函数，也是path参数
  -->
  <nav>
    <h1>App</h1>
    <RouterLink to="/hello">Go Hello</RouterLink>
    <!--params传参一-->
    <RouterLink to="/sys/user/007/janna/30">Go User</RouterLink>
    <RouterLink :to="paramsObj">GoUser_ParamsObj</RouterLink>

    <!--    query传参-->
    <RouterLink to="/sys/userDetails?id=009&name=zhang&age=21">queryJoin</RouterLink>
    <RouterLink :to="{
      path: '/hello',
       query:{
        id: '009',
        name: 'zhang',
        age: 22
      }
    }">queryObj</RouterLink>
    <RouterLink to="/sys/order">Go Order</RouterLink>
  </nav>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
a {
  margin-left: 10px;
}
</style>
