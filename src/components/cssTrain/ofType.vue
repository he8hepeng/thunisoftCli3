<template>
  <div class="fd-of-type">
    <h1>我是H1</h1>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <h2>我是h2</h2>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <h3>我是H3</h3>
  </div>
</template>
<script>
export default {
  name: 'nth-of-type'
}
</script>
<style lang="less" scoped>
  .fd-of-type {
    .size(100%);
    /* p:nth-of-type(3) {
      background: yellow;
    } */
    /* p:nth-of-type(6) {
      background: greenyellow;
    } */
    /* p:first-of-type {
      background: red;
    } */
    /* p:last-of-type {
      background: blueviolet;
    } */
    /* p:nth-last-of-type(3) {
      background: black;
      color: #fff;
    } */
  }
</style>
