<template>
  <div id="app">
    <TheHeader @openModal=openModal />
    <TheMainPage v-if="!username"/>
    <TheNotesPage
      v-if="username"
      @authStatus="authStatus"
      @openModalNote=openModalNote
    />
    <ModalAuth 
      :modal_type="modal_type"
      v-if="is_open_modal" 
      @closeModal=closeModal
      @changeModal=changeModal
    />
    <NewNoteModal
      v-if="is_open_modal_note"
      @openModalNote=openModalNote
    />
  </div>
</template>

<script>
import TheMainPage from "./pages/Main.vue";
import TheNotesPage from './pages/Notes.vue'
import TheHeader from "./components/TheHeader.vue";
import ModalAuth from './components/ModalAuth.vue';
import NewNoteModal from './components/NewNoteModal.vue';

export default {
  name: "App",
  components: {
    TheMainPage,
    TheNotesPage,
    TheHeader,
    ModalAuth,
    NewNoteModal,
  },

  data: () => ({
    is_open_modal: false,
    is_open_modal_note: false,
    modal_type: '',
    username: '',
  }),

  methods: {
    openModal(typeModal) {
      this.is_open_modal = true;
      this.modal_type= typeModal;
    },

    openModalNote(status) {
      this.is_open_modal_note = status
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

    async login() {
      await fetch("https://dist.nd.ru/api/auth",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        }
      )
      .then(response => response.json())
      .then(data => {
        this.username = data.email
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  async mounted() {
    this.login()
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

  @media  (max-width: 960px) {
    text-align: center;
  }
}
</style>
