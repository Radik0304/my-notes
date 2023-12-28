<template>
  <div class="header">
    <img src="../assets/logo.svg" alt="notes-logo" class="header__logo"/>
    <button class="header__button-auth">
      <img src="../assets/authButtonIcon.svg" alt="ath-icon">
      <span>Вход</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
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
    }

  }

  &__logo {
    @media (max-width: 500px) {
      width: 154px;
      height: 36px;
    }
  }
}
</style>
