export default {
  data () {
    return {
      list: {
        name: '何鹏',
        age: '19',
        gender: '男'
      }
    }
  },
  created () {
    console.log('我是下级混入')
  }
}
