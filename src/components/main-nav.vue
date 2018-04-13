<template>
  <div class="main-nav" :class="isShrink? 'main-nav-sm': 'main-nav-xs'">
    <div class="logo">
      <div class="name">
        <h1>{{ isShrink? 'D' : 'DEMON' }}</h1>
      </div>
    </div>
    <el-menu default-active="getRouterActive" class="main-nav-ul" @open="handleOpen" @close="handleClose" @select="handleSelect" :collapse="getIsShrink" background-color="#32393f" text-color="#fff" :router="true">
      <el-menu-item index="dashboard">
        <i class="el-icon-news"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="tables">
        <i class="el-icon-tickets" router></i>
        <span slot="title">Tables</span>
      </el-menu-item>
      <el-menu-item index="forms">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">Form</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">Setting</span>
        </template>
        <el-menu-item-group>
          <span slot="title">DEMO1</span>
          <el-menu-item index="4-1">DEMO1-1</el-menu-item>
          <el-menu-item index="4-2">DEMO1-2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">DEMON2</span>
          <el-menu-item index="4-3">DEMO2-1</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="4-4">
          <span slot="title">DEMO2-2</span>
          <el-menu-item index="4-4-1">DEMO2-2-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="error">
        <template slot="title">
          <i class="el-icon-warning"></i>
          <span slot="title">Error</span>
        </template>
        <el-menu-item index="404">404</el-menu-item>
        <el-menu-item index="500">500</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'main-nav',
  props: ['isShrink'],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getIsShrink',
      'getIsMobi',
      'getRouterActive'
    ])
  },
  methods: {
    ...mapActions([
      'setShrinkOn',
      'setRouterActive'
    ]),

    handleOpen () {
      console.log('menu open')
    },
    handleClose () {
      console.log('menu close')
    },

    handleSelect (index) {
      this.setRouterActive(index)
      if (this.getIsMobi) {
        this.setShrinkOn()
      }
    }
  },
  created () {
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.main-nav {
  width: 200px;
  height: 100%;
  overflow: hidden;
  // background: #545c64;
  background: #32393f;
  // @media (max-width: 768px) {
    transition: all 0.3s;
  // }
    // transition: all 0.3s;
  .main-nav-ul {
    border: none;
    overflow: hidden;
  }
  .logo {
    width: 100%;
    height: 60px;
    padding: 5px;
    overflow: hidden;
    box-sizing: border-box;
    .name {
      text-align: center;
      line-height: 50px;
      color: #fff;
      font-weight: bold;
      background: #545c64;
      font-size: 22px;
      border-radius: 3px;
      cursor: pointer;
      h1 {
        position: relative;
        display: inline;
      }
    }
  }
}

.main-nav-sm {
  width: 64px;
}

.main-nav-xs {
  @media (max-width: 768px) {
    width: 100% !important;
    z-index: 100;
  }
}
</style>
