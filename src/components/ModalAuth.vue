<template>
  <div class="modal-auth">
    <div class="modal-auth__container">
      <button class="button-close">
        <img
          src="../assets/closeIcon.svg"
          alt="close-icon"
        />
      </button>
      <div class="modal-auth__content">
        <h2>Вход в ваш аккаунт</h2>
        <div class="inputs">
          <modal-input :input-type="'email'" />
          <modal-input />
        </div>
        <div class="modal-auth__footer">
          <div>
            <span>
              У вас нет аккаунта?
              <a href="#">Зарегистрируйтесь</a>
            </span>
            <button class="button button__auth">
              <span>Войти</span>
            </button>
          </div>
          <div>
            <span>
              У вас есть аккаунт?
              <a href="#">Войти</a>
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
  name: "ModalAuth",
  components: {
    ModalInput,
  },
  props: {
    is_auth: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped lang="scss">
.modal-auth {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #0a1f38;
  height: 100%;
  width: 100%;
  opacity: .7;
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
    }
  }

  &__footer {
    display: flex;
    justify-content: space-around;

    span {
      a {
        color: #b1c909;
        text-decoration: none;
        font-weight: 700;
      }
    }

    .button {
      background: #b1c909;
      color: #fff;
      border: none;
      border-radius: 32px;
      height: 56px;

      &__auth {
        width: 114px;
      }

      &__registration {
        width: 210px;
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
}
</style>
