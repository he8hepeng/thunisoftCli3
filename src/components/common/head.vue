<template>
  <div class="fd-common__header">
    <slot></slot>
  </div>
</template>
<style lang="less" scoped>
  .fd-common__header {
    .size(100%, 40px);
    .hh(40px);
    .fz(18px);
    font-weight: bold;
    color: #333;
    text-align: center;
    background: #1d59c4;
    border-radius: 4px;
    color: #fff;
  }
</style>
