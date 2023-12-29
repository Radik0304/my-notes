<template>
  <div class="modal-auth">
    <div class="modal-auth__container">
      <button class="button-close" @click="closeModal">
        <img
          src="../assets/closeIcon.svg"
          alt="close-icon"
        />
      </button>

      <div class="modal-auth__content">
        <h2>{{ modal_header }}</h2>
        <div class="inputs" v-if="modal_type === 'auth'">
          <modal-input :input-type="'email'" />
          <modal-input />
        </div>

        <div class="inputs" v-else-if="modal_type === 'reg'">
          <modal-input :input-type="'email'" />
          <modal-input :input-type="'password'"/>
          <modal-input />   
        </div>

        <div class="modal-auth__footer">
          <div v-if="modal_type === 'auth'">
            <span>
              У вас нет аккаунта?
              <button @click="goToReg"> Зарегистрируйтесь </button>
            </span>
            <button class="button button__auth" @click="auth">
              <span>Войти</span>
            </button>
          </div>

          <div v-else>
            <span>
              У вас есть аккаунт?
              <button @click="goToAuth">Войдите</button>
            </span>
            <button class="button button__registation">
              <span>Зарегистрироваться</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalInput from "./ModalInput.vue";

export default {
  name: "TheModal",
  components: {
    ModalInput,
  },
  props: {
    modal_type: {
      type: String,
    },
  },

  data: () => ({
      modal_header: '',
      input_email: '',
      input_password: '',
  }),

  mounted() {
    if(this.modal_type === 'auth') {
      this.modal_header = 'Вход в ваш аккаунт'
    } else if (this.modal_type === 'reg') {
      this.modal_header = 'Регистрация'
    } else {
      this.modal_header = 'Добавление заметки'
    }
  },


  methods: {
    closeModal(){
      this.$emit('closeModal')
    },

    goToReg(){
      this.modal_header = 'Регистрация'

      this.$emit('changeModal', 'reg')
    },

    goToAuth() {
      this.modal_header = 'Авторизация'
      this.$emit('changeModal', 'auth')
    },

    auth(email, password) {
      console.log(email)
      console.log(password)
    }
  }
};
</script>

<style scoped lang="scss">
.modal-auth {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a1f38;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9999;
  font-family: "Montserrat";

  &__container {
    width: 780px;
    height: 672px;
    position: relative;
    background: #1b2f46;
    border-radius: 40px;

    .button-close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border: none;
      border-radius: 32px;
      background-color: #b1c909;
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;

    }
  }

  &__footer {
    display: flex;
    justify-content: center;
    margin-top: 54px;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    span {
      button {
        color: #b1c909;
        background: #1b2f46;
        border: none;
        font-weight: 700;
        cursor: pointer;
      }
    }

    .button {
      background: #b1c909;
      color: #fff;
      border: none;
      border-radius: 32px;
      height: 56px;
      font-size: 20px;
      cursor: pointer;

      &__auth {
        width: 114px;
      }

      &__registration {
        width: 210px;
      }
    }

  }
  &__content {
    margin: 80px;
    font-size: 18px;

    h2 {
      font-weight: 600;
      font-size: 48px;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
}
</style>
