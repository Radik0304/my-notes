<template>
  <div class="modal-note">
    <div class="modal-note__container">
      <button
        class="button-close"
        @click="closeModal"
      >
        <img
          src="../assets/closeIcon.svg"
          alt="close-icon"
        />
      </button>

      <div class="modal-note__content">
        <h2>{{ modal_header }}</h2>
        <modal-input 
          :inputType="'note'"
          class="input__note-name"
        />
        <modal-input 
          :inputType="'text'"
        />
        <div class="modal-note__footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalInput from './ModalInput.vue';

export default {
  name: "NewNoteModal",
  components: {
    ModalInput,
  },

  data: () => ({
    modal_header: "Добавление заметки",
    input_email: "",
    input_password: "",
  }),

  methods: {
    closeModal() {
      this.$emit('openModalNote', false)
    },

    goToReg() {
      this.modal_header = "Регистрация";

      this.$emit("changeModal", "reg");
    },

    goToAuth() {
      this.modal_header = "Авторизация";
      this.$emit("changeModal", "auth");
    },

    auth(email, password) {
      console.log(email);
      console.log(password);
    },
  },
};
</script>

<style scoped lang="scss">
.modal-note {
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

      &__note {
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

    .input {
      &__note {
        &-name {
          margin-bottom: 1rem;
        }
      }
    }

  }
}
</style>
