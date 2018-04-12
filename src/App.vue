<template>
  <div id="app">
    <!-- <main-nav :isShrink="isShrink" ></main-nav>
    <div class="ta-head" :style="{paddingLeft: isShrink?'64px':'200px'}">
      <main-head :isShrink="isShrink"  @change-shrink="changeShrink"></main-head>
    </div>
    <div class="ta-page" :style="{paddingLeft: isShrink?'64px':'200px', paddingTop: '60px'}">
      <div class="ta-page-content"> -->
        <router-view/>
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import mainNav from '@/components/main-nav'
import mainHead from '@/components/main-head'
export default {
  name: 'App',
  data () {
    return {
      isShrink: false
    }
  },
  methods: {
    changeShrink (val) {
      // console.log('app', val)
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
@import "style/index";
</style>
