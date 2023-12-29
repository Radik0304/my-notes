<template>
  <div class="header">
    <img src="../assets/logo.svg" alt="notes-logo" class="header__logo"/>
    <button class="header__button-auth" v-if="!is_auth" @click="openAuthModal">
      <img src="../assets/authButtonIcon.svg" alt="ath-icon">
      <span>Вход</span>
    </button>

    <div v-else class="header__login-container">
      <span class="header__login">{{ login }}</span>
      <button class="header__button-exit">
        <img src="../assets/user.svg" alt="user-icon">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',

  data: () => ({
    login: '',
    is_auth: false,
  }),

  mounted() {
    this.is_auth = !!this.login
  },

  methods: {
    openAuthModal() {
      this.$emit('openModal', 'auth')
    }
  }

}
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
      background: #B1C909;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      width: 144px;
      height: 56px;
      border-radius: 32px;
      border: none;
      color: #fff;
      font-family: 'Montserrat';
      font-size: 20px;
      font-weight: 500;

      &:hover {
        background: #97AB0D;
        transition: all .3s ease-in-out;
        cursor: pointer;
      }
    }

    &-exit {
      width: 56px;
      height: 56px;
      border: none;
      background: #1B2F46;
      border-radius: 56px;
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
}
</style>
