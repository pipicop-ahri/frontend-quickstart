<script setup>
import {useRoute} from 'vue-router'
const route = useRoute();
console.log(route.params.id);

</script>

<template>
  <p>orderPage</p>
  <p>params:{{$route.params.id}}</p>
</template>

<style scoped>

</style>