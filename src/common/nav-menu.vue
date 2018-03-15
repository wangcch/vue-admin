<template>
  <div class="nav-menu">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'nav-menu',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
