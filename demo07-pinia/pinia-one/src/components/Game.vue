<script setup>
import {useDemoStore} from '../utils/pinia.js'

let demoStore = useDemoStore();

function pay() {
  demoStore.pay(1);
}

function kill() {
  demoStore.kill(1);
}
</script>

<template>
<button @click="pay">支付</button>
<button @click="kill">打怪</button>
</template>

<style scoped>

</style>