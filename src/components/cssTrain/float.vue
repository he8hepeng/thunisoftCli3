<template>
  <div class="fd-float">
    <div></div>
    <div></div>
  </div>
</template>
<script>
  export default {
    name: '浮动布局'
  }
</script>
<style lang="less" scoped>
  .fd-float {
    .size(100%);
    & div:first-child {
      width: 200px;
      height: 100%;
      background: blue;
      float: left;
    }
    & div:last-child {
      width: calc(100% - 200px);
      height: 100%;
      background: red;
      float: left;
    }
  }
</style>
