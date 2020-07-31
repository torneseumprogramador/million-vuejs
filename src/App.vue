<template>
  <div id="app">
  <AppHeader></AppHeader>   
  <router-view></router-view>
  <AppFooter></AppFooter>

  </div>
</template>

<script>
import AppFooter from "./components/app-footer.vue"
import AppHeader from "./components/app-header.vue"
import "./assets/css/main.css"


export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
  }
}
</script>

<style lang="stylus" scoped>
</style>
