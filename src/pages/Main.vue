<template>
    <div class="main">
      <!-- <TheHeader/> -->
      <div class="main__content">
        <section class="main__content-titles">
          <h1>Мои заметки</h1>
          <h3>Не забывай о важном, храни его в облаке</h3>
        </section>
        <section class="main__content-image">
          <img src="../assets/main-image.png" alt="main-image">
        </section>
      </div>
    </div>
  </template>
  
  <script>
  // import TheHeader from "../components/TheHeader.vue";
  
  export default {
    name: 'TheMainPage',
    components: {
      // TheHeader,
    }
  }
  </script>
  
  <style lang="scss">
  .main {
    height: 100%;
    display: flex;
    flex-direction: column;

    
    &__content {
      display: flex;
      justify-content: space-around;
      margin-top: 40px;
      
      @media (max-width: 960px){
        flex-direction: column;
        align-items: center;
      }

      &-titles {
        margin: auto 0;
        width: 30%;

        @media (max-width: 960px) {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }

      &-image {
        width: 50%;

        @media (max-width: 1100px) {
          width: 40%;
        }

        @media (max-width: 960px) {
          width: 90%;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      @media (max-width: 1366px) {
        img {
          max-width: 100vw;
          max-height: 100vh;
        }
      }
    }
    h1 {
      font-weight: 900;
      font-size: 104px;
      margin: 0;
      line-height: 104px;
      max-width: 488px;

      @media (max-width: 620px) {
        font-size: 60px;
        line-height: 64px;
        max-width: 320px;
      }
    }
  }
  </style>
  