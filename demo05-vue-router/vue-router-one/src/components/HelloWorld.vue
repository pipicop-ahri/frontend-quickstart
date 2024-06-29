<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<h1>HelloWorld</h1>
  <h4>你好，query:{{$route.query.id}} == {{$route.query.name}} == {{$route.query.age}}</h4>
</template>

<style scoped>
</style>
