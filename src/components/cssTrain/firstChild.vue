<template>
  <div class="fd-firstChild">
    <h1>我是H1</h1>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <p>8</p>
    <p>9</p>
    <p>10</p>
    <h2>我是H2</h2>
  </div>
</template>
<script>
export default {
  name: 'firstChild'
}
</script>
<style lang="less" scoped>
  .fd-firstChild {
    /* p:first-child {
      background: yellow;
    }
    p:last-child {
      background: red;
    } */
    p:first-of-type {
      background: yellow;
    }
    P:last-of-type {
      background: #333;
      color: #fff;
    }
  }
</style>
