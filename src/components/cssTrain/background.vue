<template>
  <div class="fd-background">
    <div style="height: 2000px;"></div>
  </div>
</template>
<script>
  export default {
    name: '背景'
  }
</script>
<style>
  .fd-background {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background:  url('../../assets/img/bkm.jpg') no-repeat center center;
    /* background: url('../../assets/img/bkm.jpg') no-repeat, linear-gradient(to bottom right, red, yellow); */
  }
</style>
