<script setup>
import Instruct from "./components/Instruct.vue";
import Father from "./components/Father.vue";
</script>

<template>
<!--
  指令：v-text v-html v-if v-for v-on v-bind v-model v-slot

  函数：
  ref:定义响应式，可包任何属性，但需要.value取值，一般只包基本类型
  reactive:只能包引用类型为响应式
  watch:监听指定属性
  watchEffect:监听所有变化过的属性，需要if判断到再处理

  defineProps:  父给子传值
    数组写法：defineProps([])  对象写法：defineProps({books:{type:Arrays,required:false,default:[]}})
  defineEmits:  子给父传值
   const emits = defineEmits(['pay'])  在方法中 emits('pay-事件名',args)
   在父组件中要使用@接收，@就是监听事件

   插槽：默认插槽 -》 过多时要使用具名插槽 -》 使用简写
   在子组件中使用<slot>标签，name就是具名
   在父组件中，如果是默认插槽直接放就行，如果是具名，则使用<template>标签，v-slot:名称 或#名称


-->
<!--<instruct>指令</instruct>-->
  <father></father>
</template>

<style scoped>
</style>
