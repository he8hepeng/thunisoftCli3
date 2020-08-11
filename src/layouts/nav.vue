<template>
  <div id="Nav">
    <el-menu
      :default-active="indexActive"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      :collapse="isCollapse"
      :unique-opened="true">
      <el-menu-item index="example">
        <template slot="title">
          <i class="el-icon-zbpz"></i>
          <span slot="title">演示页面</span>
        </template>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>css</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(item, idx) in navList" :key="idx" :index="item.name">{{item.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { navList } from '../components/cssTrain/index.js'
export default {
  data () {
    return {
      isCollapse: false,
      navList
    }
  },
  computed: {
    ...mapState({
      indexActive: state => state.publics.indexActive
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({ name: key })
    }
  }
}
</script>
<style lang="less" scoped>
#Nav {
  .size(150px;100%);
  overflow: auto;
  margin: auto;
  @{bg_c}: #1655b9;
  .b_r(4px);
}
</style>
