<template>
  <div id="app">
    <router-view/>
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
