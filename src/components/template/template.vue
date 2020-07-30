<template>
  <div>
    <api-head>字符模板</api-head>
    <div>我叫: {{name}}, 我今年：{{age}}岁，我的性别：{{gender}}</div>
    <div>{{namePlant}}</div>
    <div>{{textPlant(name, age, gender)}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '盒子',
      age: '18',
      gender: '男'
    }
  },
  computed: {
    namePlant () {
      return `我叫: ${this.name}, 我今年：${this.age}岁，我的性别：${this.gender}`
    }
  },
  methods: {
    textPlant (_name, _age, _gender) {
      return `我叫: ${_name}, 我今年：${_age}岁，我的性别：${_gender}`
    }
  }
}
</script>
<style lang="less" scoped>
  div {
    color: #999;
  }
</style>
