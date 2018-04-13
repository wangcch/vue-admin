<template>
  <div class="register">
    <h2>Sign up</h2>
    <el-form ref="registerForm" :model="registerForm" status-icon :rules="registerRules">
      <el-form-item label="" prop="email">
        <el-input type="text" v-model="registerForm.email" auto-complete="off" placeholder="email"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="password"></el-input>
      </el-form-item>
      <el-form-item label="" prop="confirm">
        <el-input type="password" v-model="registerForm.confirm" auto-complete="off" placeholder="comfirm"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()" :loading="isLoading" class="ty-btn-100">sign up</el-button>
        <el-button @click="ressetForm()" class="ty-btn-100" style="margin: 10px 0 0 0;">reset</el-button>
      </el-form-item>
    </el-form>
    <el-button type="text" @click="toLogin" >sign in</el-button>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    const validatorSamePwd = (rule, value, callback) => {
      if (value !== this.registerForm.password) {
        callback(new Error('The two passwords are inconsistent.'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {},
      registerRules: {
        email: [
          { required: true, message: 'Please enter email', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter password', trigger: 'blur' }
        ],
        confirm: [
          { required: true, message: 'Please enter password again.', trigger: 'blur' },
          { validator: validatorSamePwd, trigger: 'blur' }
        ]
      },
      isLoading: false
    }
  },
  methods: {
    submitForm () {
      const self = this
      self.$refs['registerForm'].validate((valid) => {
        if (valid) {
          let data = Object.assign({}, self.registerForm)
          console.log(data)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    ressetForm () {
      this.$refs['registerForm'].resetFields()
      this.loginForm = {}
    },

    toLogin () {
      this.ressetForm()
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
