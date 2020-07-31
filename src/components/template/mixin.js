import mixin2 from './mixin2.js'
export default {
  data () {
    return {
      list: {
        name: '何鹏',
        age: '18',
        gender: '男'
      }
    }
  },
  mixins: [mixin2]
}
