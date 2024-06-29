<script setup>
import http from './utils/http.js'

function Get(){
  http.get("get").then(res=>{
    console.log(res);
  })
}
function GetParams1(){
  http.get("get",{
    params:{
      id:11,
      name:'222'
    }
  }).then(res=>{
    console.log(res.data)
  })
}
function GetParams2(){
  http.get("get?id=1&name=2",).then(res=>{
    console.log(res.data)
  })
}
function Post(){
  http.post("post").then(res=>{
    console.log(res)
  })
}
function PostParams(){
  http.post("post",{
    id:'1',
    name:'222'
  }).then(res=>{
    console.log(res)
  })
}
function PostParamsDelay(){
  http.post("delay/2").then(res=>{
    console.log(res)
  }).catch((err) =>{
    console.log(err)
    // alert("请求错误" + err);
  })
}

</script>

<template>
<button @click="Get">Get</button>
<button @click="GetParams1">GetParams1</button>
<button @click="GetParams2">GetParams2</button>
<button @click="Post">Post</button>
<button @click="PostParams">PostParams</button>
<button @click="PostParamsDelay">PostParamsDelay</button>

<!--抽取公共请求-->
<!--抽取公共请求，添加拦截器 -->

</template>

<style scoped>

</style>
