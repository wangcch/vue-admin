<template>
  <div class="login">
    <div class="login-title">
      <h1>{{ webTitle }}</h1>
      <p>{{ webIntroduce }}</p>
    </div>
    <div class="login-panel">
      <h2>{{isLogin? 'Sign in' : isForget? 'I forget' : 'Sign out'}}</h2>
      <el-form :model="loginForm" status-icon ref="loginForm" :rules="loginRules" class="">
        <el-form-item label="" prop="user">
          <el-input type="text" v-model="loginForm.user" auto-complete="off" placeholder="email"></el-input>
        </el-form-item>
        <transition name="e;-zoom-in-top">
        <el-form-item label="" prop="pwd" v-if="!isForget">
          <el-input type="password" v-model="loginForm.pwd" auto-complete="off" placeholder="password"></el-input>
        </el-form-item>
        </transition>
        <transition name="el-zoom-in-top">
        <el-form-item label="" prop="tpwd" v-if="!isLogin && !isForget">
          <el-input type="password" v-model="loginForm.tpwd" auto-complete="off" placeholder="twice password"></el-input>
        </el-form-item>
        </transition>
        <el-form-item>
          <el-button type="primary" @click="submitForm()" :loading="isLoading">{{isLogin? 'Sign in' : isForget? 'Send' : 'Sign out'}}</el-button>
        </el-form-item>
      </el-form>
      <el-row>
        <el-col :span="12">
          <el-button type="text" @click="changePanel" >{{!isLogin? 'Sign in' : 'Sign out'}}</el-button>
        </el-col>
        <el-col :span="12" style="text-align: right;">
         <el-button type="text" @click="iforget" v-if="!isForget" style="color: #909399">forget password</el-button>
        </el-col>
      </el-row>
      <div class="login-copyright">
        <p>Copyright © 2018. All right reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    const validatorSamePwd = (rule, value, callback) => {
      if (value !== this.loginForm.pwd) {
        callback(new Error('两次输入密码不一样！'))
      } else {
        callback()
      }
    }
    return {
      webTitle: 'DEMON',
      webIntroduce: 'Admin DEMO based on Vue , Element and ECharts (with v-charts)',
      loginForm: {},
      isLogin: true,
      isForget: false,
      loginRules: {
        user: [
          { required: true, message: '请输入登录邮箱地址', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '建议密码长度大于6个字符', trigger: 'blur' }
        ],
        tpwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatorSamePwd, trigger: 'blur' }
        ]
      },
      isLoading: false
    }
  },
  methods: {
    submitForm () {
      const self = this
      self.$refs['loginForm'].validate((valid) => {
        if (valid) {
          let data = Object.assign({}, self.loginForm)
          console.log(data)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    ressetForm () {
      this.$refs['loginForm'].resetFields()
      this.loginForm = {}
    },

    changePanel () {
      this.isLogin = !this.isLogin
      this.isForget = false
      this.ressetForm()
    },

    iforget () {
      this.isForget = true
      this.isLogin = false
      this.ressetForm()
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  // background: linear-gradient(to top right, rgba(#303133, 1), rgba(#606266, 0.6));
  background: url('../assets/loginbg.jpg') no-repeat;
  background-size: cover;
  position: relative;
  // overflow: hidden;
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
    padding: 100px 50px;
    box-sizing: border-box;
    transition: all 0.3s;
    @media (max-width: 768px) {
      width: 100%;
      padding: 60px 30px;
    }
    h2 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 50px;

    }
    .el-button--primary {
      width: 100%;
    }
    .login-copyright {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      p {
        padding: 30px 0;
        color: #909399;
        font-size: 14px;
      }
    }
  }
}
</style>
