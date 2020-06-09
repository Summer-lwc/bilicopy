<template>
  <div id="app">
    <router-view></router-view>
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
