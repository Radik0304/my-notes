<template>
    <div class="modal__input-container">
        <span>{{ input_span }}</span>
        <input type="text" :placeholder="placeholder_text"/>
        <!-- <button class="button-view">
            <img src="../assets/view-password.svg" alt="">
        </button> -->
    </div>
</template>

<script>
export default {
    name: "ModalInput",
    props: {
        inputType: String,
    },

    data: () => ({
        icon_button_view_passsword: '../assets/view-password.svg',
        input_span: '',
        placeholder_text: ''
    }),

    mounted() {
        this.inputType === 'email' ? this.input_span = 'Email' : 'Пароль'
        if(this.inputType === 'email') {
            this.input_span = 'Email'
            this.placeholder_text = 'Введите Email'
        } else if (this.inputType === 'note') {
            this.input_span = 'Название заметки'
            this.placeholder_text = 'Введите название'
        } else if (this.inputType === 'text') {
            this.input_span = 'Текст заметки'
            this.placeholder_text = 'Введите текст'
        } else {
            this.input_span = 'Пароль'
            this.placeholder_text = 'Введите пароль'
        }
    }

}
</script>

<style scoped lang="scss">
.modal__input-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 40px;

    input {
        max-width: 620px;
        height: 72px;
        font-size: 18px;
        border-radius: 36px;
        border: none;
        padding-left: 16px;

        &::placeholder {
            color: #9DA5AF;
        }
    }

    span {
        display: flex;
        margin-left: 24px;
        margin-bottom: 8px;
        color: #9DA5AF;
    }
}
</style>