<template>
  <div class="fd-width">
    <div></div>
  </div>
</template>
<script>
  export default {
    name: '固定宽'
  }
</script>
<style lang="less" scoped>
  .fd-width {
    width: 100%;
    height: 100%;
    background: yellow;
    > div {
      width: 400px;
      height: 100%;
      background: #fff;
      margin: auto;
    }
  }
</style>
