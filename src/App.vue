<template>
  <div id="app">
    <TheHeader @openModal=openModal @authStatus=authStatus />
    <TheNotesPage
      v-if="is_auth_user"
      @authStatus="authStatus"
    />
    <TheMainPage v-else/>
    <ModalAuth 
      :modal_type="modal_type"
      v-if="is_open_modal" 
      @closeModal=closeModal
      @changeModal=changeModal
    />
  </div>
</template>

<script>
import TheMainPage from "./pages/Main.vue";
import TheNotesPage from './pages/Notes.vue'
import TheHeader from "./components/TheHeader.vue";
import ModalAuth from './components/ModalAuth.vue';

export default {
  name: "App",
  components: {
    TheMainPage,
    TheNotesPage,
    TheHeader,
    ModalAuth,
  },

  data: () => ({
    is_open_modal: false,
    modal_type: '',
    is_auth_user: false,
  }),

  methods: {
    openModal(typeModal) {
      this.is_open_modal = true;
      this.modal_type= typeModal;
    },

    closeModal() {
      this.is_open_modal = false;
    },

    closeModalNote() {
      this.is_open_modal_note = false;
    },

    changeModal(changedType) {
      this.modal_type = changedType;
    },

    authStatus(isAuth){
      this.is_auth_user = isAuth;
    },
  },
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

  @media  (max-width: 960px) {
    text-align: center;
  }
}
</style>
