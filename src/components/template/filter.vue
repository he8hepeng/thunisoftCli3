<template>
  <div>
    <api-head>filter过滤</api-head>
    <el-button @click="++filterValue">点击+</el-button>
    <div>{{filterValue | jos}}</div>
    <div>{{filterValue | jos | jos2(objSet)}}</div>
  </div>
</template>
<script>
export default {
  name: 'filter过滤',
  data () {
    return {
      filterValue: 0,
      objSet: {
        name: '何鹏',
        age: '18'
      }
    }
  },
  filters: {
    jos (_val) {
      return `${_val}是${_val & 1 ? '奇数' : '偶数'}`
    },
    jos2 (_val, { name, age }) {
      // if (_val & 1) {
      //   return ''
      // }
      // return `${_val}, 我叫${name}，我今年${age}岁`
      return _val + '第二个'
    }
  }
}
</script>
