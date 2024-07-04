<script setup>
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, reactive, ref, watch, watchEffect} from 'vue'
const name = ref('v-text');
const show = ref(true);
const arr = ref([1,2,3,4,5])
const value = ref('demo');
const value2 = ref('test');
const person = reactive({
  name:'janna',
  age:20
})
// console.log(value);
//
// function changeVal() {
//   value.value = 'janna';
// }
// watch(value,(nVal,oVal)=>{
//   console.log(nVal);
//   console.log(oVal);
// })
// watchEffect(()=>{
//   if (value.value !== 'demo') {
//     console.log("value值变了",value.value);
//   }
//   if (value2.value !== 'janna') {
//     console.log("value2值变了",value2.value);
//   }
// })
onBeforeUpdate(()=>{
  console.log('更新前',window.document.getElementById('#put')?.innerText);
  console.log('更新前',value2.value);
});
onUpdated(()=>{
  console.log('updated:',window.document.getElementById('#put')?.innerText);
  console.log('updated:',value2.value);
})
onBeforeMount(()=>{
  console.log('mountBefore',window.document.getElementById('#put')?.innerText);
  console.log('mountBefore',value2.value);
})
onMounted(()=>{
  console.log('mounted',window.document.getElementById('#put')?.innerText);
  console.log('mounted',value2.value);
})

</script>

<template>
<p>{{name}}</p>
<p v-text="name"></p>
<p v-html="`<button>template</button>`"></p>
<p v-if="show">show</p>
<p v-else>display</p>
<li v-for="(item,index) in arr" :key="index">{{item}} == {{index}}</li>
<button v-on:click="show = !show">隐藏</button>
  <button @click="changeVal">隐藏2</button>
  value1:<input id="put" :value="value"><br/>
<!--  其本质还是从js中改变数据，数据变化更新视图。而双向绑定是视图更新也会影响数据的更新-->
<!--  <input v-bind:value="value">-->
 value2:<input v-model="value2"><br/>
<p>引用:{{person.name}} {{person.age}}</p>



</template>

<style scoped>

</style>