<template>
  <div>
    {{id}}
    {{age}}
    {{name}}
    {{interest}}
  </div>
</template>
<script>
export default {
  props: ['age', 'name', 'interest'],
  data () {
    return {
      id: this.$route.params.id
    }
  },
  created () {
    console.log(this, this.$data)
  }
}
</script>
