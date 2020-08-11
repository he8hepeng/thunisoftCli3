<template>
  <div class="fd-onlyChild">
    <ul>
      <li>li</li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'onlyChild'
}
</script>
<style lang="less" scoped>
  .fd-onlyChild {
    .size(100%);
    li {
      width: 100%;
      height: 30px;
    }
    li:only-child {
      background: red;
    }
    /* li:only-of-type {
      background: red;
    } */
  }
</style>
