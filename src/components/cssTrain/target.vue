<template>
  <div class="fd-target">
    <a href="#abc">1</a>
    <br />
    <a href="#bcd">2</a>
    <div id="abc">我是第一个的</div>
    <div id="bcd">我是第二个的</div>
  </div>
</template>
<script>
export default {
  name: 'target'
}
</script>
<style lang="less" scoped>
  :target {
    background: yellow;
  }
  .fd-target {
    .size(100%);
  }
</style>
