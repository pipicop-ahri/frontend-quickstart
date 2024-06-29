<script setup>
import {ref} from 'vue';

const num = ref(0);
console.log(num.value);
console.log("不带value", num);

num.value++
console.log(num.value);


defineProps({
  msg: {
    type: String,
    required: true
  },
  value:{
    type: String,
    required: false,
    default: 'Hello Vue3',
  },
  eventDblclick:{
    type: String,
    required: false,
    default: 'dblclick',
  },
  eventClick:{
    type: String,
    required: false,
    default: 'click',
  }
})
function joinStr(val = 'str'){
  console.log(val);
  return '00' + val;
}

</script>

<template>
  <div>
    <span>{{num}}</span>
    <p>
      变量&属性重名：<input :value />
    </p>
    <p>
      templateStr + 变量 + 函数：<input :value="`templateStr + ${value} + ` + joinStr(msg)">
    </p>
    <p>
      <span>插值函数：{{joinStr() + Math.random() + new Date()}}</span>
    </p>
    <a v-on:click="joinStr()">点击</a>
    <a @click="joinStr('点击2')">点击2</a>

    <!--动态参数-->
    <a v-on:[eventDblclick]="joinStr('双击')">点击3</a>
    <a @[eventClick]="joinStr('单击')">点击4</a>

    <a v-on:[eventDblclick]="joinStr('双击2')">双击</a>
    <a @[eventClick]="joinStr('单击')">单击</a>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
