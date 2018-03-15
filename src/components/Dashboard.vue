<template>
  <div class="dashboard">
    <el-row :gutter="15">
      <el-col :md="8" :sm="12" :xs="24">
        <el-card>
          <div slot="header"><span>DEMO1</span></div>
          <div class="ta-card-content">
            demodemodemo
          </div>
        </el-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <el-card>
          <div slot="header"><span>DEMO2</span></div>
          <div class="ta-card-content">
            demodemodemo
          </div>
        </el-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <el-card>
          <div slot="header"><span>DEMO3</span></div>
          <div class="ta-card-content">
            demodemodemo
          </div>
        </el-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <el-card>demon1</el-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <el-card>demon2</el-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <el-card>demon3</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  height: 2000px;
  .el-col {
    margin-bottom: 15px;
  }
}
</style>
