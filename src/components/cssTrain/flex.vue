<template>
  <div class="fd-flex">
    <h1>flex-direction:</h1>
    <el-radio v-model="txhradio" label="1">清空</el-radio>
    <el-radio v-model="txhradio" label="2">row</el-radio>
    <el-radio v-model="txhradio" label="3">row-reverse</el-radio>
    <el-radio v-model="txhradio" label="4">column</el-radio>
    <el-radio v-model="txhradio" label="5">column-reverse</el-radio>
    <!--  -->
    <h1>justify-content:</h1>
    <el-radio v-model="txradio" label="1">清空</el-radio>
    <el-radio v-model="txradio" label="2">flex-start</el-radio>
    <el-radio v-model="txradio" label="3">flex-end</el-radio>
    <el-radio v-model="txradio" label="4">center</el-radio>
    <el-radio v-model="txradio" label="5">space-around</el-radio>
    <el-radio v-model="txradio" label="6">space-between</el-radio>
    <el-radio v-model="txradio" label="7">space-evenly</el-radio>
    <!--  -->
    <h1>align-items:</h1>
    <el-radio v-model="airadio" label="1">清空</el-radio>
    <el-radio v-model="airadio" label="2">flex-start</el-radio>
    <el-radio v-model="airadio" label="3">flex-end</el-radio>
    <el-radio v-model="airadio" label="4">center</el-radio>
    <el-radio v-model="airadio" label="5">stretch</el-radio>
    <!--  -->
    <h1>flex-wrap:</h1>
    <el-radio v-model="wrapradio" label="1">nowrap</el-radio>
    <el-radio v-model="wrapradio" label="2">wrap</el-radio>
    <el-radio v-model="wrapradio" label="3">wrap-reverse</el-radio>

    <h1>align-content:</h1>
    <el-radio v-model="alcont" label="1">清空</el-radio>
    <el-radio v-model="alcont" label="2">flex-start</el-radio>
    <el-radio v-model="alcont" label="3">flex-end</el-radio>
    <el-radio v-model="alcont" label="4">center</el-radio>
    <el-radio v-model="alcont" label="5">space-around</el-radio>
    <el-radio v-model="alcont" label="6">space-between</el-radio>
    <el-radio v-model="alcont" label="7">stretch</el-radio>

    <el-button @click="domnum++">加dom</el-button>
    <el-button @click="domnum = 2">清空</el-button>
    <div class="fd-flexDom fd-flexDirection"
      :class="[`fd-flexDirection_${txhradio}`,
        `fd-justify_${txradio}`,
        `fd-alignItem_${airadio}`,
        `fd-wrap_${wrapradio}`,
        `fd-alignContent_${alcont}`]">
      <div v-for="item in domnum" :key="item">{{item}}</div>
    </div>
    <!--  -->
  </div>
</template>
<script>
export default {
  name: '弹性盒布局',
  data () {
    return {
      txhradio: '1',
      txradio: '1',
      airadio: '1',
      wrapradio: '1',
      alcont: '1',
      domnum: 4
    }
  }
}
</script>
<style lang="less" scoped>
  @flexDirection: initial, row, row-reverse, column, column-reverse;
  @justify: initial, flex-start, flex-end, center, space-around, space-between, space-evenly;
  @ailist: initial, flex-start, flex-end, center, stretch;
  @wraplist: nowrap, wrap, wrap-reverse;
  @alcont: initial, flex-start, flex-end, center, space-around, space-between, stretch;
  .fd-flexDom {
    .size(100%, 500px);
    display: flex;
    background: yellow;
    > div {
      .size(100px);
      background: red;
      border: 1px solid blue;
      .border(@color: blue);
    }
    each(@flexDirection, {
      &.fd-flexDirection_@{index} {
        flex-direction: @value;
      }
    })
    each(@justify, {
      &.fd-justify_@{index} {
        justify-content: @value;
      }
    })

    each(@ailist, {
      &.fd-alignItem_@{index} {
        align-items: @value;
      }
    })

    each(@wraplist, {
      &.fd-wrap_@{index} {
        flex-wrap: @value;
      }
    })

    each(@alcont, {
      &.fd-alignContent_@{index} {
        align-content: @value;
      }
    })

    /* fd-alignContent_ */
  }
</style>
