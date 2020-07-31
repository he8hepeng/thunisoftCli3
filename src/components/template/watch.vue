<template>
  <div>
    <api-head>监听</api-head>
    <el-input type="text" v-model="num"></el-input>
    <el-button @click="addNum">+</el-button>

    我的名字: <el-input type="text" v-model="objectA.name"></el-input>
    我的年龄: <el-input type="text" v-model="objectA.age"></el-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arrayList: [],
      objectA: {
        name: '盒子',
        age: 18
      },
      num: 0
    }
  },
  watch: {
    arrayList () {
      console.log('我改变了')
    },
    objectA () {
      console.log('我是objectA, 我改变了')
    }
  },
  methods: {
    addNum () {
      this.arrayList.push(this.num)
      this.num = ''
    }
  }
}
</script>
