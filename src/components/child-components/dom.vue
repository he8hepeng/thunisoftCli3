<template>
  <div>
    我是子组件
    {{message.name}}
    {{b}}
    <el-button @click="$emit('touchA', '123321')"></el-button>
  </div>
</template>
<script>
  export default {
    props: {
      message: {
        type: [Object, String, Number],
        default: () => {
          return {}
        }
      },
      arrayList: {
        type: Array
      }
    },
    data () {
      return {
        a: null,
        b: []
      }
    },
    watch: {
      arrayList (newV) {
        this.b = newV.slice()
      }
    },
    created () {
      this.a = this.message
      this.b = this.arrayList.slice()
    }
  }
</script>
<style lang="less" scoped>

</style>
