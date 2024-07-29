<script setup>
// const prop = defineProps(['books','info'])
const prop = defineProps({
  books: {
    type: Array,
    required: true,
    default: []
  },
  info: {
    type: Object,
    required: false,
    default: 0
  }
})





 let emits = defineEmits(['pay']);

function pay(){
  console.log("execute")
  emits('pay', 5);
}
</script>

<template>
<p>son</p>
  <li v-for="book in prop.books">{{book}}</li>
  <p>{{prop.info.name}} == {{prop.info.price}}</p>
  <button @click="pay">pay</button>
<!--  </slot>-->
  <slot name="btn">
    <button></button>
  </slot>
  <br/>
  <hr/>
  <slot name="input">
    <input type="text" value="默认值">
  </slot>
</template>

<style scoped>

</style>