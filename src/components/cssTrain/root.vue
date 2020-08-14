<template>
  <div class="fd-root"></div>
</template>
<script>
export default {
  name: 'root选择器'
}
</script>
<style scoped>
  :root {
    background: yellow;
    --red-background: red;
  }
  .fd-root {
    /* background: var(--red-background); */
    width: 100%;
    height: 100%;
  }

</style>
