<template>
  <div>
    <api-head>Mixin混入</api-head>
    <div v-for="(value, key, index) in list" :key="index">{{value}}, {{key}}</div>
  </div>
</template>
<script>
import mixin from './mixin.js'
export default {
  name: 'mixin混入',
  mixins: [mixin],
  data () {
    return {
      list: {
        age: 17
      }
    }
  }
}
</script>
