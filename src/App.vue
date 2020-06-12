<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  name:'app'
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

</style>
