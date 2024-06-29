<script setup>
import {computed, reactive, ref, watch, watchEffect} from "vue";

let price = 100;
function buy(){
  alert("点击购买")
}
// Reactive state
const message = 'Hello Vue!';
const isVisible = true;
const isAnotherCondition = false;
const items = [{ id: 1, text: 'Learn Vue' }, { id: 2, text: 'Practice more' }];
const imageSrc = 'https://vuejs.org/images/logo.png';
const count = 0;
const rawHtml = '<span style="color: red;">This is raw HTML</span>';
// let url = ref("https://www.baidu.com");
let url = ref("https://www.baidu.com");
function changeUrl(){
  url.value = "https://www.qq.com";
}

let car = reactive({
  price: 1000,
  brand: 'xiaomi'
})

// Methods
function addPrice(){
  car.price += 100;
}
const num = ref(1);
const totalPrice = computed(() => {
  return car.price * num.value;
})
// 只针对单一属性进行监控
// watch(num,(value, oldValue, onCleanup)=>{
//   console.log("onCleanup：",onCleanup);
//   if (value > 3) {
//     alert("数量过多");
//     num.value = 3;
//   }
// })
const singleBind = ref("singleBind");
const doubleBind = ref("doubleBind");
// 监控所有变量，有任何变化都可以捕获取在里面进行处理
watchEffect(()=>{
  if(num.value > 3){
    alert("数量多了")
    num.value = 3;
  }
  if (car.price > 1300) {
    alert("价格过高")
    car.price = 1300;
  }
  console.log("单：",singleBind.value);
  console.log("双：",doubleBind);
})
function single(val){
  console.log("sval：",val);
  console.log("单：",singleBind.value);
}
function double(val){
  console.log("dval：",val);
  console.log("双：",doubleBind.value);
}
</script>

<template>
  <h3>指令</h3>
  <hr>
<!--    v-text-->
<!--    <span v-text="message"></span>-->
<!--    <span>{{message}}</span>-->
<!--    <p v-show="isVisible">你可以看到我</p>-->
<!--    <p v-if="isVisible">现在你看到我了</p>-->
<!--    <ul>-->
<!--      <li v-for="(item,index) in item" :key="item.id">-->
<!--        {{item.text + index}}-->
<!--      </li>-->
<!--    </ul>-->
<!--    <button v-on:click="buy">购买</button>-->

<!--  属性绑定v-bind  简写:-->
  <a v-bind:href="url">Go</a>
  <a :href="url">Go2</a>
  <button @click="changeUrl" >变</button>
  <input :value="singleBind" @change="single"/>单向绑定
  <br/>
  <input v-model="doubleBind" @change="double" />双向绑定

<!--  如果要使用响应式的双向绑定，基本类型使用ref包装，对象类型也能包，但每次都在加.value，所以使用reactive
ref
  1。使用提示自动导入ref
  2.将基本类型用ref包装起来，会返回一个代理对象。
  3.在script区域取值使用ref代理对象的.value
  4.在页面或属性中就不需要.value
reactive
  除了不能包基本类型，取值不用.value，其它用法和ref一样
  实践：
  1。基本用ref 对象用reactive
  2.断了引用就不是响应式的了，所有要用const申明，可以改.value的值，但不会断引用
  3。深层响应式的，对象.对象.对象 都是响应式的
-->

<!--  v-model:和v-bing类似，它是双向绑定的，前提是数据是响应式的-->

  <p>价格：{{car.price}}</p>
  <p>数量：{{num}}</p>
  <button @click="addPrice">加价</button>
  <button @click="num++">加量</button>
  <button  >购买{{totalPrice}}</button>


  <hr>
</template>

<style scoped>

</style>