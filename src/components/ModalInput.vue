<!-- с этим копонентом потом разобраться при рефакторинге -->

<template>
  <div class="modal__input-container">
    <label :for="inputType">{{
      input_span
    }}</label>
    <input
      maxlength="100"
      v-if="inputType !== 'text'"
      :type="dataType"
      :placeholder="placeholder_text"
      :id="inputType"
      v-model="inputValue"
    />
    <textarea
      name="note-text"
      v-else
      maxlength="500"
      :id="inputType"
      cols="30"
      rows="10"
      :class="[
        inputType === 'text' ? 'input-text' : ' ',
      ]"
      v-model="textareaValue"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: "ModalInput",
  props: {
    inputType: String,
  },

  data: () => ({
    icon_button_view_passsword:
      "../assets/view-password.svg",
    input_span: "",
    placeholder_text: "",
    dataType: "text",
    inputValue: "",
    textareaValue: "",
  }),

  mounted() {
    if (this.inputType === "email") {
      this.dataType = "email";
      this.input_span = "Email";
      this.placeholder_text = "Введите Email";
    } else if (this.inputType === "note") {
      this.input_span = "Название заметки";
      this.placeholder_text = "Введите название";
    } else if (this.inputType === "text") {
      this.input_span = "Текст заметки";
      this.placeholder_text = "Введите текст";
    } else if (this.inputType === "password") {
      this.dataType = "password";
      this.input_span = "Пароль";
      this.placeholder_text = "Введите пароль";
    } else {
      this.dataType = "password";
      this.input_span = "Пароль еще раз";
      this.placeholder_text = "Повторите пароль";
    }
  },

  watch: {
    inputValue() {
      this.$emit(
        "getInputValue",
        this.inputValue
      );
    },

    textareaValue() {
      this.$emit(
        "getTextareaValue",
        this.textareaValue
      );
    },
  },
};
</script>

<style scoped lang="scss">
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

  .input-text {
    height: 244px;
    border-radius: 36px;
    padding: 16px;
    border: none;
  }

  label {
    display: flex;
    margin-left: 24px;
    margin-bottom: 8px;
    color: #9da5af;
  }
}
</style>
