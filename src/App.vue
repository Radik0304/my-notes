<template>
  <div id="app">
    <Main/>
    <!-- <modal-auth/> -->
  </div>
</template>

<script>
// import ModalAuth from './components/ModalAuth.vue';
import Main from './pages/Main.vue';

export default {
  name: 'App',
  components: {
    // ModalAuth,
    Main,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
  height: 100%;
  margin: 0;
}
body {
  background: #0A1F38;
  width: 100%;
  height: 100vh;
}
</style>
