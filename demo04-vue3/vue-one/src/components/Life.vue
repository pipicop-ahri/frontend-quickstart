<script setup>
import {onBeforeMount, ref, onMounted, onBeforeUpdate, onUpdated} from "vue";

function add(){
  count.value ++;
}
const count = ref(0);
onBeforeMount(()=>{
  console.log(`挂载前，count=${count.value}`);
  console.log(`挂载前，${document.getElementById("btn")}`);
})
onMounted(() => {
  console.log(`挂载后，count=${count.value}`);
  console.log(`挂载后，${document.getElementById("btn")}`);
})
onBeforeUpdate(()=>{
  console.log(`更新前，count：${count.value}`);
  console.log(`更新前，${document.getElementById("btn").innerHTML}`);
})
onUpdated(()=>{
  console.log(`更新后，count:${count.value}`);
  console.log(`更新后，${document.getElementById("btn").innerHTML}`);

})

</script>

<template>
<button @click="add" id="btn">加{{count}}</button>
</template>

<style scoped>

</style>