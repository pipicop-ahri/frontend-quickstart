<script setup>
import {useRoute,useRouter} from 'vue-router';
 let route = useRoute();
 let router = useRouter();


console.log(route.name);
console.log(route.path);
console.log(route.params);
console.log(route.fullPath);
console.log(route);
function goHome(){
  router.push('/');
}
function goBack(){
  router.go(-1);
}

</script>

<template>
个人信息{{this.$route.params}}
<button @click="goHome">Home</button>
  <button v-on:click="goBack">Back</button>
</template>

<style scoped>

</style>