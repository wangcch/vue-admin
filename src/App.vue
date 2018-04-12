<template>
  <div id="app">
    <router-view/>
    <div id="dev">
      <h1>vuex</h1>
      <p>isMobi: {{ getIsMobi }}</p>
      <p>isShrink: {{ getIsShrink }}</p>
      <p>isLogin: {{ getIsLogin }}</p>
      <p>routerAvtive: {{ getRouterActive }}</p>
      <p>isDashboardSmaller: {{ getIsDashboardSmaller }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  data () {
    return { }
  },
  computed: {
    ...mapGetters([
      'getIsMobi',
      'getIsShrink',
      'getRouterActive',
      'getIsLogin',
      'getIsDashboardSmaller'
    ])
  },
  methods: {
    ...mapActions([
      'setBeMobi',
      'setBePC',
      'setShrinkOn',
      'setShrinkOff',
      'toggleShrink',
      'setRouterActive',
      'setLogin',
      'changeDashboardSize'
    ]),

    haveChangeWindow () {
      if (window.innerWidth < 970) {
        this.setShrinkOn()
        if (window.innerWidth < 768) {
          this.setBeMobi()
        } else {
          this.setBePC()
        }
      } else {
        this.setShrinkOff()
        this.setBePC()
      }
    },
    monitDashboardCardWidth () {
      try {
        let cardContent = document.getElementsByClassName('ta-card-content')[0]
        if (cardContent) {
          this.changeDashboardSize(cardContent.offsetWidth)
        }
      } catch (error) {}
    }
  },
  mounted () {
    const self = this
    window.onresize = () => {
      self.haveChangeWindow()
      self.monitDashboardCardWidth()
    }
    this.setRouterActive(this.$route.name)
  },

  created () {
    this.haveChangeWindow()
  }
}
</script>
<style lang="scss">
@import "style/index";
#dev {
  position: fixed;
  bottom: 15px;
  left: 15px;
  padding: 8px 15px;
  background: rgba(#fff, 0.3);
  z-index: 999;
  h1 {
    margin-bottom: 10px;
  }
  p {
    padding: 3px 0;
  }
}
</style>
