<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import layout from "./layout/layout.vue";
export default {
  components:{
    layout,
  },
}
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Helvetica, sans-serif;
}
</style>
