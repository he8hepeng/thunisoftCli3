<template>
  <div class="fd-empty">
    <div v-if="type">{{message}}</div>
  </div>
</template>
<script>
export default {
  name: 'empty',
  data () {
    return {
      message: '我存在数据',
      type: false
    }
  }
}
</script>
<style scoped lang="less">
  .fd-empty {
    width: 100%;
    height: 100%;
    /* &::after {
      content: '我是伪类元素 我不管用呢';
      top: 50px;
      .pt(a);
    } */
  }
  .fd-empty:empty {
    &::before {
      content: '暂无数据';
    }
  }
</style>
