<template>
  <div class="main-head">
    <i class="el-icon-menu main-head-menu" @click="navToggleClick"></i>
    <!-- <nav-menu></nav-menu> -->
    <div class="mp-head-title">
      <h1>DEMON</h1>
    </div>
    <div class="main-head-user">
      <el-button size="small" plain>U</el-button>
    </div>
  </div>
</template>

<script>
import navMenu from '@/components/nav-menu'
export default {
  name: 'main-head',
  props: ['isShrink'],
  data () {
    return {
      isShrinkHead: this.isShrink
    }
  },
  methods: {
    navToggleClick () {
      this.changeShrink(!this.isShrinkHead)
    },

    changeShrink (val) {
      this.isShrinkHead = val
      this.$emit('change-shrink', this.isShrinkHead)
    },

    haveChangeWindow () {
      let innerWidth = window.innerWidth
      if (innerWidth > 970) {
        this.changeShrink(false)
      } else {
        this.changeShrink(true)
      }
      window.onresize = () => {
        if (window.innerWidth < 970) {
          this.changeShrink(true)
        } else {
          this.changeShrink(false)
        }
      }
    }
  },
  watch: {
    isShrinkHead (val) {
      this.$emit('change-shrink', val)
    }
  },
  created () {
    this.haveChangeWindow()
  },
  components: {
    navMenu
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables';
.main-head {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: #fff;
  padding: 10px 15px;
  box-shadow: 0 3px 5px rgba(#000, 0.05);
  .main-head-menu {
    margin-right: 30px;
    cursor: pointer;
    font-size: 22px;
    color: $icon-color;
  }
  .mp-head-title {
    display: none;
    font-weight: bold;
  }
  .main-head-user {
    float: right;
  }
}
</style>
