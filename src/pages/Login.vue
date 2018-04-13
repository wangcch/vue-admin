<template>
  <div class="login">
    <h2>Sign in</h2>
    <el-form ref="loginForm" :model="loginForm" status-icon :rules="loginRules" @keyup.enter.native="submitForm">
      <el-form-item label="" prop="email">
        <el-input type="text" v-model="loginForm.email" auto-complete="on" placeholder="demo" name="email"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="on" placeholder="666666" name="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" :loading="isLoading" class="ty-btn-100">sign in</el-button>
      </el-form-item>
    </el-form>
    <el-button type="text" @click="toRegiter" >sign up</el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {},
      loginRules: {
        email: [
          { required: true, message: 'Please enter email', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter password', trigger: 'blur' }
        ]
      },
      isLoading: false
    }
  },
  methods: {
    _login (data) {
      if (data.email === 'demo' && data.password === '666666') {
        this.$message.success('login success')
        setTimeout(() => {
          this.$router.replace('/dashboard')
        }, 300)
      } else {
        this.$message.error('login error')
      }
    },

    submitForm () {
      const self = this
      self.$refs['loginForm'].validate((valid) => {
        if (valid) {
          let data = Object.assign({}, self.loginForm)
          console.log(data)
          self._login(data)
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

    toRegiter () {
      this.ressetForm()
      this.$router.replace('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
