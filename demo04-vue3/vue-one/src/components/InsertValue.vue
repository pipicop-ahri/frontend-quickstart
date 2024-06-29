<script setup>
let name = 'janna';
let car = {
  brand: '小米',
  price: '2000'
}

</script>

<template>
  <h3>插值表达式</h3>
  <hr>
  <p>name:{{name}}</p>
  <p>汽车品牌:{{car.brand}}</p>
  <p>汽车价格:{{car.price}}</p>
  <hr>


</template>

<style scoped>

</style>