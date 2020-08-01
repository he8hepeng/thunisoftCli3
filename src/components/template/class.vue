<template>
  <div>
    <api-head>class绑定</api-head>
    <div class="a" :class="{'fd-active': isActive}">我通过布尔值切换class{{isActive}}</div>
    <el-button @click="isActive = !isActive">点击切换class</el-button>
    <div :class="classObj">我通过对象来切换class</div>
    <el-button @click="classObj.active = !classObj.active">点击切换class1</el-button>
    <el-button @click="classObj.textDrag = !classObj.textDrag">点击切换class2</el-button>
    <api-head>绑定多个class</api-head>
    <div class="['aaabbbccc', { 'fd-active': isActive }, isActive ? 'abc' : 'def']">我被他们切换</div>
  </div>
</template>
<script>
export default {
  name: 'class绑定',
  data () {
    return {
      isActive: true,
      classObj: {
        active: true,
        textDrag: false
      }
    }
  }
}
</script>
<style scoped lang="less">
  .def {
    background: #000;
    color: #fff;
  }
  .fd-active {
    background: blue;
    color: #fff;
  }
  .abc {
    background: yellow;
    color: #000;
  }
</style>
