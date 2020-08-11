<template>
  <div class="fd-not">
    <p></p>
    <p class="fd-name">何鹏</p>
    <p class="fd-age">18</p>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'not'
}
</script>
<style scoped lang="less">
  .fd-not {
    width: 100%;
    height: 100%;
    > * {
      width: 100%;
      height: 40px;
      background: yellow;
      /* &:not(:last-child) {
        border-bottom: 1px solid blue;
      } */

      /* &:not(div) {
        border-bottom: 1px solid blue;
      } */

      /* &:not(.fd-name) {
        border-bottom: 1px solid blue;
      } */
    }
  }
</style>
