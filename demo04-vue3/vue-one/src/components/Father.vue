<script setup>
import Son from "./Son.vue";
import {reactive} from 'vue';
const data = reactive({
  books: [
      '西游记',
      '三国演义'
  ],
  money: 100,
})
function moneyMinis(val){
  console.log("val：",val);
  data.money = data.money - val;
}

</script>

<template>
<!--
父传子使用v-bind,子组件中定义definedPros来接收即可
子传父使用emit事件，定义defineEmits事件，在父组件中使用事件监听v-on:事件名或@事件名来接收

-->
  <div style="background-color: pink">
    <h2>Father</h2>
  <!--  <son :books="data.books" @buy="moneyMinis" :money="data.money"></son>-->
    <son v-bind="data" @buy="moneyMinis" >
    <!--父子组件中，可以传递参数或对象类型，但当传递html模版时，如果使用v-html会很麻烦，所以引入插槽机制-->
    <!--插槽 默认值 具名插槽 简写标识-->
<!--      <button>slotSon</button>-->
      <template v-slot:title>
        titleSon
      </template>
      <template #btn>
        <button>btn</button>
      </template>
    </son>
    <button @click="data.money+=100">充值</button>
  </div>


</template>

<style scoped>

</style>