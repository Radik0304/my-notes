<template>
  <div class="header">
    <img src="../assets/logo.svg" alt="notes-logo" class="header__logo"/>
    <button class="header__button-auth" v-if="!is_auth" @click="openAuthModal">
      <img src="../assets/authButtonIcon.svg" alt="ath-icon">
      <span>Вход</span>
    </button>

    <div v-else class="header__login-container">
      <span class="header__login">{{ props.login }}</span>
      <div class="unauth__container">
        <button class="header__button-exit" @click="exit">
          <img src="../assets/user.svg" alt="user-icon">
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
  name: 'TheHeader',
  props: {
    is_auth: Boolean,
    login: String,
  },

  // data: () => ({
  //   login: '',
  //   is_auth: false,
  // }),

  created() {
    console.log('created', this.login)
  },

  mounted() {
    console.log('mounted', this.login)
  },

  // async mounted() {
  //   this.is_auth = !!this.login
  //   await fetch("https://dist.nd.ru/api/auth",
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('token')}`
  //         },
  //       }
  //     )
  //     .then(response => response.json())
  //     .then(data => {
  //       this.$emit('authStatus', true)
  //       this.login = data.email
  //       this.is_auth = !!this.login
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  // },

  methods: {
    openAuthModal() {
      this.$emit('openModal', 'auth')
    },

    async exit(){
      await fetch("https://dist.nd.ru/api/auth",
        {
          method: "DELETE"
        })
        localStorage.removeItem('token')
    }
  },

  // async create() {
  //   await fetch("https://dist.nd.ru/api/auth",
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('token')}`
  //         },
  //       }
  //     )
  //     .then(response => response.json())
  //     .then(data => {
  //       this.login = data.email
  //       this.is_auth = !!this.login
  //       this.$emit('authStatus', true)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  // },
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
      cursor: pointer;

      &:hover {
        background: #9DA5AF;
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
        display: block;
      }
    }
    &__dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      z-index: 1;
      
      button {
        cursor: pointer;
        background: #9DA5AF;
        border: none;

        &:hover {
          background: #97AB0D;
        }
      }
    }

  }
}
</style>
