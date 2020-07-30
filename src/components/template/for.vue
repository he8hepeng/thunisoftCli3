<template>
  <div>
    <api-head>for循环</api-head>
    <div>
      <span v-for="(value, key, index) in list" :key="index">{{key}} + {{value}}</span>
    </div>
    <div>
      <span v-for="(item, idx) in arrayList" ::key="idx">{{item}}</span>
    </div>
    <div>
      <span v-for="(value, idx) in 10" ::key="idx">{{value}}<br /></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'for循环',
  data () {
    return {
      list: {
        name: '何鹏',
        age: '18',
        gender: '男'
      },
      arrayList: [1,3,5,7,9]
    }
  }
}
</script>
