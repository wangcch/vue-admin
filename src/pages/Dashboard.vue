<template>
  <div class="dashboard">
    <el-row :gutter="15">
      <el-col :lg="8" :sm="12" :xs="24">
        <el-card>
          <div slot="header"><span>玫瑰环图</span></div>
          <div class="ty-card-content">
            <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="8" :sm="12" :xs="24">
        <el-card>
          <div slot="header"><span>玫瑰饼图</span></div>
          <div class="ty-card-content">
             <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="8" :sm="12" :xs="24">
        <el-card>
          <div slot="header"><span>饼图</span></div>
          <div class="ty-card-content">
            <ve-pie :data="chartData" :settings="chartSettings2"></ve-pie>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="8" :sm="12" :xs="24">
        <el-card>
          <div slot="header"><span>折线图</span></div>
          <div class="ty-card-content">
            <ve-line :data="chartData" :settings="chartSettings3"></ve-line>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="8" :sm="12" :xs="24">
        <el-card>
          <div slot="header"><span>堆积面积图</span></div>
          <div class="ty-card-content">
            <ve-line :data="chartData" :settings="chartSettings4"></ve-line>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="8" :sm="12" :xs="24">
        <el-card>
          <div slot="header"><span>柱状图</span></div>
          <div class="ty-card-content">
            <ve-histogram :data="chartData" :settings="chartSettings5"></ve-histogram>
          </div>
        </el-card>
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
  },

  created () {
    this.chartData = {
      columns: ['日期', '成本', '利润'],
      rows: [
        { '日期': '1月1号', '成本': 123, '利润': 3 },
        { '日期': '1月2号', '成本': 1223, '利润': 6 },
        { '日期': '1月3号', '成本': 2123, '利润': 9 },
        { '日期': '1月4号', '成本': 4123, '利润': 12 },
        { '日期': '1月5号', '成本': 3123, '利润': 15 },
        { '日期': '1月6号', '成本': 7123, '利润': 20 }
      ]
    }
    this.chartSettings = {
      roseType: 'radius'
    }
    this.chartSettings2 = {
      dimension: '成本',
      metrics: '利润'
    }
    this.chartSettings3 = {
    }
    this.chartSettings4 = {
      area: true
    }
    this.chartSettings5 = {
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  // height: 2000px;
  .echarts {
    width: 100%;
    height: 360px;
  }
  .el-col {
    margin-bottom: 15px;
    position: relative;
    box-sizing: border-box;
  }
}
</style>
