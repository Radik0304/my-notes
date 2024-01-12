<template>
  <div class="one-note">
    <h4>{{ note_header }}</h4>
    <span>{{ note_text }}</span>
    <button @click="deleteNote">
      <img src="../assets/closeIcon.svg" />
      Удалить
    </button>
  </div>
</template>

<script>
export default {
  name: "OneNote",
  props: {
    note_header: String,
    note_text: String,
    note_id: Number,
  },

  methods: {
    async deleteNote() {
      const response = await fetch(`https://dist.nd.ru/api/notes/${this.note_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        }
      )
      if(response.ok) {
        this.$emit('deleteNote', this.note_id)
      } else {
        console.log('ошибка удаления')
      }
    }
  }
};
</script>

<style lang="scss">
.one-note {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #b1c909;
  width: 388px;
  max-height: 488px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  position: relative;

  h4 {
    margin: 0;
    margin: 20px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #a5bb0c;
    font-weight: 600;
    font-size: 24px;
  }

  button {
    color: #fff;
    border: none;
    background: #b1c909;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    align-self: flex-end;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  h4, span {
    text-align: start;
    padding-left: 28px;
  }
}
</style>
