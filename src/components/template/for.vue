<template>
  <div>
    <api-head>for循环</api-head>
    <div>
      <span v-for="(value, key, index) in list" :key="index">{{value}} + {{key}}</span>
    </div>
    <div>
      <span v-for="(item, idx) in arrayList" :key="idx">{{item}}</span>
    </div>
    <div>
      <span v-for="(value, idx) in 10" :key="idx">{{value}}<br /></span>
    </div>
    <el-button @click="arrayList.push(2)">+</el-button>
    <ChildDom @touchA="touchClick" :message="list" :arrayList="arrayList"></ChildDom>
  </div>
</template>
<script>
import ChildDom from '../child-components/dom.vue'
export default {
  name: 'for循环',
  components: {
    ChildDom
  },
  data () {
    return {
      list: {
        name: '何鹏',
        age: '18',
        gender: '男'
      },
      arrayList: [1, 3, 5, 7, 9]
    }
  },
  methods: {
    touchClick (_val) {
      console.log('子组件点击了 数据时' + _val)
    }
  },
}
</script>
