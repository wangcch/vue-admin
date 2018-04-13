<template>
  <div id="layout">
    <main-nav :isShrink="getIsShrink" ></main-nav>
    <div class="ty-head" :style="{paddingLeft: getIsShrink?'64px':'200px'}">
      <main-head :getIsShrink="getIsShrink"></main-head>
    </div>
    <div class="ty-page" :style="{paddingLeft: getIsShrink?'64px':'200px', paddingTop: '60px'}">
      <div class="ty-page-content">
        <router-view/>
      </div>
      <div class="ty-page-footer">
        <p>Copyright © 2018 Wangcch.</p>
      </div>
    </div>
  </div>
</template>

<script>
import mainNav from '@/components/main-nav'
import mainHead from '@/components/main-head'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  data () {
    return {
      isShrink: true
    }
  },
  computed: {
    ...mapGetters([
      'getIsShrink',
      'getIsMobi'
    ])
  },
  methods: {
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
#layout {
  height: 100%;
}
</style>
