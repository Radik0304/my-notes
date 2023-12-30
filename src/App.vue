<template>
  <div id="app">
    <TheHeader @openModal=openModal />
    <Main />
    <TheNotes/>
    <!-- <TheModal
      :modal_type="modal_type"
      v-if="is_open_modal" 
      @closeModal=closeModal
      @changeModal=changeModal
    /> -->
    <ModalAuth 
      :modal_type="modal_type"
      v-if="is_open_modal" 
      @closeModal=closeModal
      @changeModal=changeModal
    />
  </div>
</template>

<script>
// import TheModal from './components/TheModal.vue';
import Main from "./pages/Main.vue";
import TheNotes from './pages/Notes.vue'
import TheHeader from "./components/TheHeader.vue";
import ModalAuth from './components/ModalAuth.vue';

export default {
  name: "App",
  components: {
    // TheModal,
    Main,
    TheNotes,
    TheHeader,
    ModalAuth,
  },

  data: () => ({
    is_open_modal: false,
    modal_type: '',
  }),

  methods: {
    openModal(typeModal) {
      this.is_open_modal = true;
      this.modal_type= typeModal;
    },

    closeModal() {
      this.is_open_modal = false;
    },

    changeModal(changedType) {
      this.modal_type = changedType;
    }


  }
};
</script>

<style>
#app {
  font-family: "Montserrat";
  text-align: center;
  color: #ffffff;
  height: 100%;
  margin: 0;
}
body {
  background: #0a1f38;
  width: 100%;
  height: 100vh;
  margin: 0;
}

h3 {
  font-weight: 400;
  font-size: 32px;
  color: #9da5af;
  line-height: 48px;
  max-width: 394px;

  @media (max-width: 620px) {
    font-size: 24px;
    line-height: 24px;
    max-width: 320px;
  }
}
h1,
h3 {
  text-align: start;

  @media (max-width: 960px) {
    text-align: center;
  }
}
</style>
