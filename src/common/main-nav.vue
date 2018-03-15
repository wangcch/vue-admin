<template>
  <div class="main-nav" :class="isShrink? 'main-nav-sm': 'main-nav-xs'">
    <div class="logo">
      <div class="name">
        <h1>{{ isShrink? 'D' : 'DEMON' }}</h1>
      </div>
    </div>
    <el-menu default-active="1" class="main-nav-ul" @open="handleOpen" @close="handleClose" :collapse="isShrink" background-color="#545c64" text-color="#fff" :router="true">
      <el-menu-item index="1" :route="{path: '/'}">
        <i class="el-icon-news"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="2" :route="{path: '/tables'}">
        <i class="el-icon-tickets" router></i>
        <span slot="title">Tables</span>
      </el-menu-item>
      <el-menu-item index="3" :route="{path: '/forms'}">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">Form</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="4-4">
          <span slot="title">选项4</span>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="6" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'main-nav',
  props: ['isShrink'],
  data () {
    return {
    }
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

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
  background: #545c64;
  transition: all 0.3s;
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
      background: #409EFF;
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
