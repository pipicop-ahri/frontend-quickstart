<script setup>
import Son from "./Son.vue";
import {reactive, ref} from "vue";

const books = ref(['sanguo','xiyouji','hongloumeng']);
const info = reactive({
  name:'car',
  price: 100
})

function pay(val) {
  console.log(val);
  info.price -= val;
}

</script>

<template>
<p>father</p>
  <son :books :info @pay="pay">
<!--    <button>插槽</button>-->
    <template v-slot:btn>
      <button>子按钮</button>
    </template>
    <template #input>
      <input type="text" value="子框">
    </template>

  </son>


</template>

<style scoped>

</style>