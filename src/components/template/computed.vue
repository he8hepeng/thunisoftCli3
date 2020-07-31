<template>
  <div>
    <api-head>computed 计算属性</api-head>
    <div>{{js}}</div>
    <div>{{js}}</div>
    <div>{{js}}</div>
    <div>{{js}}</div>

    <div>{{js2()}}</div>
    <div>{{js2()}}</div>
    <div>{{js2()}}</div>
    <div>{{js2()}}</div>
  </div>
</template>
<script>
export default {
  name: '计算属性',
  data () {
    return {
      firstNum: 99999,
      lastNum: 11111
    }
  },
  computed: {
    js () {
      console.log('computed')
      return this.firstNum - this.lastNum
    }
  },
  methods: {
    js2 () {
      console.log('methods')
      return this.firstNum - this.lastNum
    }
  }
}
</script>
