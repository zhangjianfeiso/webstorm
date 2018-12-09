<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    #flow-list a .yd-tabbar-txt{
        margin-right: 15px;
        padding: 2px;
        color:#999;
    }

   /* .yd-list-img{
        height: 130px!important;
        padding: 0 0!important;
    }*/
</style>
