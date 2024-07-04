<script setup>
import {useRoute,useRouter} from 'vue-router';
const route = useRoute();
console.log(route.query.id + ' ' + route.query.name);

const router = useRouter();
console.log("route",route);

function goHome(){
  router.push({
    url:'/user/userProfile',
    query:{
      name:'routerPush'
    }
  })
}
</script>

<template>
<p>userPage</p>
  <p>query:{{$route?.query?.id}} == {{$route.query.name}}</p>
  <button @click="router.go(-1)">上一步</button>
  <button @click="goHome">到个人页</button>
  <button v-on:click="router.go(1)">下一步</button>
  <router-link to="/user/userPosts" >userPosts</router-link>
  <router-link to="/user/userProfile" >userProfile</router-link>
  <router-view/>
</template>

<style scoped>

</style>