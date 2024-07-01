<script setup>
import {useDemoStore} from '../utils/pinia.js'

let store = useDemoStore();
</script>

<template>
<div>
  <p>￥：{{store.rmb}}</p>
  <p>$：{{store.usd}}</p>
  <p>&：{{store.ote}}</p>
</div>
</template>

<style scoped>
div {
  background-color: pink;
}
</style>