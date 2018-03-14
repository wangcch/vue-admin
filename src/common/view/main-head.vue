<template>
  <div class="main-head">
    <i class="el-icon-menu ta-menu" @click="navToggleClick"></i>
    <!-- <nav-menu></nav-menu> -->
    <div class="mp-head-title">
      <h1>DEMON</h1>
    </div>
  </div>
</template>

<script>
import navMenu from '@/common/view/nav-menu'
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
      this.isShrinkHead = !this.isShrinkHead
      // console.log(this.isShrinkHead)
      this.$emit('change-shrink', this.isShrinkHead)
    }
  },
  watch: {
    isShrinkHead (val) {
      this.$emit('change-shrink', val)
    }
  },
  components: {
    navMenu
  }
}
</script>

<style lang="scss" scoped>
.main-head {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background: #fff;
  padding: 10px 15px;
  box-shadow: 0 3px 5px rgba(#000, 0.05);
  .ta-menu {
    margin-right: 30px;
    cursor: pointer;
    font-size: 22px;
    color: #757575;
  }
  .mp-head-title {
    display: none;
    font-weight: bold;
  }
}
</style>
