<template>
  <div id="app">
    <router-view></router-view>
    <img v-if="btnFlag" class="go-top" src="./assets/top.png" @click="backTop">
  </div>
</template>
<script>
export default {
  name:'app',
  data() {
    return {
      btnFlag: false
    }
  },
  created () {
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods:{
      backTop () {
        let that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
    },
    scrollToTop () {
      let that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 1000) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  }
}
</script>

<style lang="less">
body,ul,p{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: black;
  cursor: pointer;
}
ul{
  list-style: none;
}
.go-top{
  position: fixed;
  top: 550px;
  right: 40px;
}
</style>
