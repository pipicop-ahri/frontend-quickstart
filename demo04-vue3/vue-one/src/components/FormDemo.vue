<script setup>
import {reactive} from "vue";


const data = reactive({
  username: 'zhangsan',
  agress: true
})

</script>

<template>
  <div style="display: flex;">
    <div style="border: 1px solid black;width: 300px">
      <form>
        <h1>表单绑定</h1>
        <p style="background-color: azure"><label>姓名(文本框)：</label><input v-model="data.username"/></p>
        <p style="background-color: azure"><label>同意协议(checkbox)：</label>
          <input v-model="data.agress" type="checkbox"/>
        </p>

      </form>
    </div>
    <div style="border: 1px solid blue;width: 200px">
      <h1>结果预览</h1>
      <p style="background-color: azure"><label>姓名：{{data.username}}</label></p>
      <p style="background-color: azure"><label>同意协议：{{data.agress}}</label>
      </p>

    </div>
  </div>
</template>

<style scoped>

</style>
