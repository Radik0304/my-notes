<template>
  <div class="header">
    <img
      src="../assets/logo.svg"
      alt="notes-logo"
      class="header__logo"
    />
    <button
      class="header__button-auth"
      v-if="!login"
      @click="openAuthModal"
    >
      <img
        src="../assets/authButtonIcon.svg"
        alt="ath-icon"
      />
      <span>Вход</span>
    </button>

    <div v-else class="header__login-container">
      <span class="header__login">{{
        login
      }}</span>
      <div class="unauth__container">
        <button
          class="header__button-exit"
        >
          <img
            src="../assets/user.svg"
            alt="user-icon"
          />
        </button>
        <div class="unauth__dropdown-content">
          <button @click="exit">Выйти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    username: String,
  },

  data: () => ({
    login: "",
  }),

  async created() {
    await fetch("https://dist.nd.ru/api/auth", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "token"
        )}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.login = data.email;
        if (this.login) {
          this.$emit("authStatus", true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    openAuthModal() {
      this.$emit("openModal", "auth");
    },

    async exit() {
      await fetch("https://dist.nd.ru/api/auth", {
        method: "DELETE",
      });
      localStorage.removeItem("token");
      location.reload()
      if (!this.login) {
        this.$emit("authStatus", false);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 1366px) {
    margin-top: 20px;
  }

  &__button {
    &-auth {
      background: #b1c909;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      width: 144px;
      height: 56px;
      border-radius: 32px;
      border: none;
      color: #fff;
      font-family: "Montserrat";
      font-size: 20px;
      font-weight: 500;

      &:hover {
        background: #97ab0d;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
      }
    }

    &-exit {
      width: 56px;
      height: 56px;
      border: none;
      background: #1b2f46;
      border-radius: 56px;
      cursor: pointer;

      &:hover {
        background: #9da5af;
      }
    }
  }

  &__logo {
    @media (max-width: 500px) {
      width: 154px;
      height: 36px;
    }
  }

  &__login {
    font-size: 18px;
    font-weight: 400;
    margin: auto;

    &-container {
      display: flex;
      align-content: center;
      gap: 12px;
    }
  }

  .unauth {
    &__container {
      position: relative;
      display: inline-block;

      &:hover .unauth__dropdown-content {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__dropdown-content {
      display: none;
      position: absolute;
      width: 100px;
      height: 100px;
      right: -21px;
      background-color: #1B2F46;
      z-index: 1;
      border-radius: 12px;

      button {
        cursor: pointer;
        background: inherit;
        border: none;
        color: #B1C909;
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 18px;

        &:hover {
          color: #97ab0d;
        }
      }
    }
  }
}
</style>
