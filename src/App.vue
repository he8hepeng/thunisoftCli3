<!--
 * @Author: HePeng
 * @Description:
 * @Date: 2020-05-18 17:31:35
 * @LastEditors: HePeng
 * @LastEditTime: 2021-01-20 21:40:15
-->
<template>
  <!-- 全局loading 遮罩 -->
  <a-spin :spinning="$store.state.antD.spinIsShow">
    <!-- 中文国际化 -->
    <a-locale-provider :locale="Zhcn">
      <div id="app">
        <h1>thunisoft-cli Vue模板</h1>
      </div>
    </a-locale-provider>
  </a-spin>
</template>

<script>
// 国际化
import Zhcn from 'ant-design-vue/lib/locale-provider/zh_CN'
// 时间
import moment from 'moment'
export default {
  data() {
    return {
      moment,
      Zhcn
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.$route.query.hasOwnProperty('jwt')) {
        this.$store.dispatch('setToken', this.$route.query.jwt)
      }
    }, 500)
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
