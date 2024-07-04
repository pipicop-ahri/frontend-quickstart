<script setup>
//基本类型
// let basicTypeProps = defineProps(['money','books']);
// 对象类型
let props = defineProps({
  money:{
    type: Number,
    required: true,
    default: 0
  },
  books: Array,
});
// let props = defineProps();
// const {money,books} = props;


let emits = defineEmits([
    'buy'
]);
function buy(){
  emits('buy',10)
}
</script>

<template>
  <div style="background-color: #747bff">
    <h2>
      <slot name="title">
        defaultSon
      </slot>
    </h2>
    <p>收到了书：{{props.books}},价格为:{{props.money}}</p>
<!--    <p>收到了书：{{books}},价格为:{{money}}</p>-->
      <button @click="buy">花钱</button>
      <slot name="btn">
        <button></button>
      </slot>
  </div>
</template>

<style scoped>

</style>