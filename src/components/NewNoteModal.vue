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
          @getInputValue="getInputValue"
        />
        <modal-input
          :inputType="'text'"
          @getTextareaValue="getTextareaValue"
        />
        <div class="modal-note__footer">
          <span class="login-error" v-if="error">
            Проверьте введеные данные
          </span>
          <button class="button" @click="addNote">
            Добавить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalInput from "./ModalInput.vue";
import { addNote } from "../utils/Api.js";

export default {
  name: "NewNoteModal",
  components: {
    ModalInput,
  },

  data: () => ({
    modal_header: "Добавление заметки",
    input_value: "",
    textarea_value: "",
    error: false,
  }),

  methods: {
    closeModal() {
      this.$emit("openModalNote", false);
    },

    getInputValue(inputValue) {
      this.input_value = inputValue;
    },

    getTextareaValue(textareaValue) {
      this.textarea_value = textareaValue;
    },

    async addNote() {
      const data = {
        title: this.input_value,
        content: this.textarea_value,
      };
      await addNote(data)
        .then((response) => {
          if (!response.ok) {
            this.error = true;
            return;
          }
          response.json().then((newNoteData) => {
            this.$emit(
              "pushNewNoteData",
              newNoteData
            );
            this.closeModal();
          });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped lang="scss">
.modal-note {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(10, 31, 56, 0.7);
  position: absolute;
  top: 0;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    gap: 2rem;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    button {
      font-family: "Montserrat";
      color: #fff;
      background: #b1c909;
      border: none;
      font-weight: 500;
      font-size: 20px;
      cursor: pointer;
      width: 150px;
      height: 56px;
      border-radius: 32px;
    }
  }
  &__content {
    margin: 80px;
    margin-bottom: 30px;
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
  .login-error {
    background: #ff74611a;
    color: #ff7461;
    border-radius: 24px;
    display: block;
    margin-top: 20px;
  }
}
</style>
