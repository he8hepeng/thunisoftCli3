<template>
  <div class="fd-nth-child">
    <div v-for="(item, idx) in 10" :key="idx">
      {{item}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'nth-child'
}
</script>
<style lang="less" scoped>
  .fd-nth-child {
    .size(100%);
    /* div:nth-child(2){
      background: greenyellow;
    } */
    /* div:nth-child(n+4) {
      background: yellow;
    } */
    /* div:nth-child(-n+3) {
      background: yellow;
    } */
    /* div:nth-child(3n-2) {
      background: yellow;
    } */
  }
</style>
