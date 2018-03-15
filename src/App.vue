<template>
  <div id="app">
    <main-nav :isShrink="isShrink" ></main-nav>
    <div class="ta-head" :style="{paddingLeft: isShrink?'64px':'200px'}">
      <main-head :isShrink="isShrink"  @change-shrink="changeShrink"></main-head>
    </div>
    <div class="ta-page" :style="{paddingLeft: isShrink?'64px':'200px', paddingTop: '60px'}">
      <router-view/>
    </div>
  </div>
</template>

<script>
import mainNav from '@/common/view/main-nav'
import mainHead from '@/common/view/main-head'
export default {
  name: 'App',
  data () {
    return {
      isShrink: true
    }
  },
  methods: {
    changeShrink (val) {
      console.log('app', val)
      this.isShrink = val
    }
  },
  created () {
  },
  components: {
    mainNav,
    mainHead
  }
}
</script>

<style lang="scss">
@import "common/style/index";
</style>
