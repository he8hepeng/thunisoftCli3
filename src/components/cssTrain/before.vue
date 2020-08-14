<template>
  <div class="fd-before">
    <div class="fd-title">
      <span>我是一个标题</span>
    </div>
  </div>
</template>
<script>
export default {
  name: '伪类'
}
</script>
<style lang="less" scoped>
  .fd-before {
    .size(100%);
    .fd-title {
      .size(100%, 60px);
      background: blue;
      color: #fff;
      .hh(60px);
      text-align: center;
      font-weight: blod;
      &::before {
        content: '⭐';
      }
      &::after {
        content: '⭐';
      }
    }
  }
</style>
