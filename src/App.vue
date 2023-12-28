<template>
  <div id="app">
    <TheHeader/>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader"

export default {
  name: 'App',
  components: {
    TheHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #0A1F38;
}
</style>
