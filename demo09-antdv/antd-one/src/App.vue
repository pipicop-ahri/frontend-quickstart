<script setup>
import {ref} from 'vue'
const checked = ref(false);
const num = ref(2);
num.value = num.value ++
console.log(num.value);

</script>
<template>
<button>
</button>
  <a-switch v-model:checked="checked" />
</template>

<style scoped>

</style>
