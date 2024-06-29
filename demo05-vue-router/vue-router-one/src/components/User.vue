<script setup>
import {useRoute,useRouter} from 'vue-router'
const route = useRoute()
</script>

<template>
<h4>你好，{{$route.params.id }} == {{$route.params.name}} == {{route.params.age}}</h4>

  <h4>你好，query:{{$route.query.id}} == {{route.query.name}} == {{$route.query.age}}</h4>
  <router-link to="/sys/user/007/profile">个人信息</router-link>
  <router-link to="/sys/user/007/posts">我的邮箱</router-link>
  <div style="border: 5px solid pink">
    <router-view></router-view>
  </div>
</template>

<style scoped>
a {
  margin-left: 10px;
}
</style>