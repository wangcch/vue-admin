<template>
  <div class="layout-login">
    <div class="login-title">
      <h1>{{ webTitle }}</h1>
      <p>{{ webIntroduce }}</p>
    </div>
    <div class="login-panel">
      <div class="login-panel_content">
        <router-view/>
      </div>
      <div class="login-copyright">
        <p>Copyright © 2018 Wangcch.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      webTitle: 'Vue-admin',
      webIntroduce: 'Admin DEMO based on Vue , Element and ECharts (with v-charts)'
    }
  }
}
</script>

<style lang="scss">
.layout-login {
  width: 100%;
  height: 100%;
  background: url('../assets/loginbg.jpg') no-repeat;
  background-size: cover;
  position: relative;
  .login-title {
    padding-top: 100px;
    padding-left: 60px;
    color: #246f8a;
    @media (max-width: 970px) {
      max-width: 300px;
      padding-left: 30px;
    }
    h1 {
      font-size: 52px;
      font-weight: 300;
      margin-bottom: 15px;
    }
    p {
      line-height: 30px;
    }
  }
  .login-panel {
    position: fixed;
    top: 0;
    right: 0;
    width: 460px;
    height: 100%;
    background: #ffffff;
    padding: 100px 50px 50px 50px;
    box-sizing: border-box;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      width: 100%;
      padding: 60px 30px 30px 30px;
    }
    .login-panel_content {
      flex: auto;
      h2 {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 50px;
        @media (max-width: 768px) {
          font-size: 22px;
          margin-bottom: 30px;
        }
      }
      .ta-btn-100 {
        width: 100%;
      }
    }
    .login-copyright {
      flex: 0 0 auto;
      width: 100%;
      text-align: center;
      p {
        padding: 15px 0;
        color: #909399;
        font-size: 14px;
        span {
          @media (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }
}
</style>
