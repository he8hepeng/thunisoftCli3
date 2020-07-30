<template>
  <div>
    <api-head>IF判断</api-head>
    <el-button @click="clickType = !clickType">{{clickType ? '隐藏' : '展示'}}</el-button>
    <p v-if="clickType">来控制我呀</p>
    <p v-show="clickType">也来控制我呀</p>
  </div>
</template>
<script>
  export default {
    name: 'if判断',
    data () {
      return {
        clickType: true
      }
    }
  }
</script>
