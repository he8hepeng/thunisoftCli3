<template>
  <a-spin :spinning="$store.state.antD.spinIsShow">
    <div id="app">
      <h1>thunisoft-cli Vue模板</h1>
    </div>
  </a-spin>
</template>

<script>
// 国际化
import Zhcn from 'ant-design-vue/lib/locale-provider/zh_CN'
// 时间
import moment from 'moment'
export default {
  data () {
    return {
      moment,
      Zhcn
    }
  },
  created () {
    setTimeout(() => {
      // console.log(this.$store)
      // 打开遮罩
      this.$store.dispatch('Set_Spin', true)
    }, 3000)
  }
}
</script>

<style lang="less">
#app {
  .size(100vw;100vh);
  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: #000;
  }
}
</style>
