<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<!--
使用vue-route
  1 安装vue-route依赖
  2 在route目录下的index.js文件中配置： 配置路由表 创建路由器 导出路由器
  3 在main.js中导入路由器，在让vue实例使用此路由器

传参
 1 params 路径参数：'/user/:param'
 2 query 查询参数
   2.1 "/user?id=1&name=janna"
   2.2 "{name:'',query{...param}}" name必须和路由表中的name相同

取参:route
  1 params
    1.1 在模板中直接使用$route.params.属性名
    1.2 在js中先导入useRoute,再使用其实例route来操作，route.param.属性名
  2 query
    2.1 在模板中用$route.query.属性名
    2.2 js中使用route.query.属性名

路由控制:router
  router:useRouter对象可以控制页面前前进或后退，也可以push到其它页面，页面的路径就可以通过route中的属性来获取

-->

  <!--路由-->
  <router-link to="/user?id=1&name=janna">user_query_join</router-link>
  <router-link :to="{
    name:'user',
    query: {
      id:'obj',
      name: 'seraphine'
    }
  }" >user_query_obj</router-link>
  <router-link to="/order/123">order_params</router-link>
  <!--要跳转的页面-->
  <router-view/>
</template>

<style scoped>
a {
  margin-left: 10px;
}
</style>
