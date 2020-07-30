<template>
  <div>
    <api-head>for循环</api-head>
    <div>
      <span v-for="(value, key, index) in list" :key="index">{{key}} + {{value}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: {
        name: '何鹏',
        age: '18',
        gender: '男'
      }
    }
  }
}
</script>
