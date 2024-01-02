<template>
  <div id="app">
    <TheHeader @openModal=openModal />
    <TheMainPage v-if="!is_auth"/>
    <TheNotesPage
      v-else
      :is-auth="is_auth"
      :login="username"
      @authStatus="authStatus"
    />
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
      @login="login"
    />
  </div>
</template>

<script>
// import TheModal from './components/TheModal.vue';
import TheMainPage from "./pages/Main.vue";
import TheNotesPage from './pages/Notes.vue'
import TheHeader from "./components/TheHeader.vue";
import ModalAuth from './components/ModalAuth.vue';

export default {
  name: "App",
  components: {
    // TheModal,
    TheMainPage,
    TheNotesPage,
    TheHeader,
    ModalAuth,
  },

  data: () => ({
    is_open_modal: false,
    modal_type: '',
    username: '',
    is_auth: false,
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
    },

    authStatus(isAuth){
      console.log( 'выхывается')
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
        this.is_auth = !!this.login
      })
      .catch(err => {
        console.log(err);
      });
    }
  },

  async mounted() {
    this.login()
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

  @media (max-width: 960px) {
    text-align: center;
  }
}
</style>
