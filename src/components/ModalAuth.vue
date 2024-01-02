<template>
  <div class="modal-auth">
    <div class="modal-auth__container">
      <button
        class="button-close"
        @click="closeModal"
      >
        <img
          src="../assets/closeIcon.svg"
          alt="close-icon"
        />
      </button>

      <div class="modal-auth__content">
        <h2>{{ modal_header }}</h2>
        <div
          class="inputs"
          v-if="modal_type === 'auth'"
        >
          <div class="modal__input-container">
            <span>Email</span>
            <input
              type="email"
              placeholder="Введите Email"
              v-model="input_email"
            />
          </div>

          <div class="modal__input-container">
            <span>Пароль</span>
            <input
              type="password"
              placeholder="Введите пароль"
              v-model="input_password"
            />
          </div>
        </div>

        <div
          class="inputs"
          v-else-if="modal_type === 'reg'"
        >
          <div class="modal__input-container">
            <span>Email</span>
            <input
              type="email"
              placeholder="Введите Email"
              v-model="input_email"
            />
          </div>

          <div class="modal__input-container">
            <span>Пароль</span>
            <input
              type="password"
              placeholder="Введите пароль"
              v-model="input_password"
            />
          </div>

          <div class="modal__input-container">
            <span>Пароль еще раз</span>
            <input
              type="password"
              placeholder="Введите пароль повторно"
              v-model="input_confirm_password"
            />
          </div>
        </div>

        <div class="modal-auth__footer">
          <div v-if="modal_type === 'auth'">
            <span>
              У вас нет аккаунта?
              <button @click="goToReg">
                Зарегистрируйтесь
              </button>
            </span>
            <button
              type="submit"
              class="button button__auth"
              @click="auth"
            >
              <span>Войти</span>
            </button>
          </div>

          <div v-else>
            <span>
              У вас есть аккаунт?
              <button @click="goToAuth">
                Войдите
              </button>
            </span>
            <button
              class="button button__registation"
              @click="registation"
            >
              <span>Зарегистрироваться</span>
            </button>
          </div>
        </div>
        <span
          class="login-error"
          v-if="login_error"
        >
          Пользователь с таким логином не найден
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import ModalInput from "./ModalInput.vue";

export default {
  name: "TheModal",
  components: {
    // ModalInput,
  },
  props: {
    modal_type: {
      type: String,
    },
  },

  data: () => ({
    modal_header: "",
    input_email: "",
    input_password: "",
    input_confirm_password: "",
    login_error: false,
  }),

  mounted() {
    if (this.modal_type === "auth") {
      this.modal_header = "Вход в ваш аккаунт";
    } else if (this.modal_type === "reg") {
      this.modal_header = "Регистрация";
    } else {
      this.modal_header = "Добавление заметки";
    }
  },

  methods: {
    closeModal() {
      this.$emit("closeModal");
    },

    goToReg() {
      this.modal_header = "Регистрация";
      this.$emit("changeModal", "reg");
    },

    goToAuth() {
      this.modal_header = "Авторизация";
      this.$emit("changeModal", "auth");
    },

    // авторизация
    async auth() {
      const authData = {
        email: this.input_email,
        password: this.input_password,
      };
      await fetch("https://dist.nd.ru/api/auth", {
        method: "POST",
        body: JSON.stringify(authData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => {
            response.json()
                .then(data => {
                    localStorage.setItem(
                    "token",
                    data.accessToken
                    );
                    this.closeModal()
                    this.$emit('login')
                    console.log(localStorage)
                })
            })
            //позже поработать с этим, не срабатывает
            .catch(err => {
                console.log(err);
                this.login_error = true;
            });
    },

    // регистрация
    async registation() {
      const authData = {
        email: this.input_email,
        password: this.input_password,
        confirm_password:
          this.input_confirm_password,
      };
      const response = await fetch(
        "https://dist.nd.ru/api/reg",
        {
          method: "POST",
          body: JSON.stringify(authData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        this.goToAuth();
      } else {
        this.login_error = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.modal-auth {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(10, 31, 56, .7);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;
  font-family: "Montserrat";

  &__container {
    width: 780px;
    position: relative;
    background: #1b2f46;
    border-radius: 40px;

    .login-error {
      background: #ff74611a;
      color: #ff7461;
      border-radius: 24px;
      display: block;
      margin-top: 20px;
    }

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

.modal__input-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  input {
    max-width: 620px;
    height: 72px;
    font-size: 18px;
    border-radius: 36px;
    border: none;
    padding-left: 16px;

    &::placeholder {
      color: #9da5af;
    }
  }

  span {
    display: flex;
    margin-left: 24px;
    margin-bottom: 8px;
    color: #9da5af;
  }
}
</style>
