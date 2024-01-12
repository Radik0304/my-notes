<template>
  <div class="notes">
    <div class="notes__list" v-for="note in notes" :key="note.id">
      <OneNote
        :note_header="note.title"
        :note_text="note.content"
        :note_id="note.id"
      />
    </div>
    <div class="notes__footer">
      <button class="add-note" @click="openModal">
        <img
          src="../assets/add-note.svg"
          alt="add-note-icon"
        />
      </button>
    </div>
  </div>
</template>

<script>
import OneNote from "@/components/OneNote.vue";

export default {
  name: "TheNotesPage",
  components: {
    OneNote,
  },

  data: () => ({
    notes: [],
  }),

  methods: {
    openModal() {
      this.$emit("openModalNote", true);
    },

    pushNewNoteData(dataNewNote) {
      this.notes.push(dataNewNote)
    }
  },

  async created() {
    await fetch("https://dist.nd.ru/api/notes",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        }
      )
      .then(response => response.json())
      .then(data => {
          this.notes = data
      })
      .catch(err => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
.notes {
  width: 100%;
  height: 100%;

  .add-note {
    width: 56px;
    height: 56px;
    border: none;
    border-radius: 32px;
    background: #b1c909;
    position: absolute;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
  }
  &__list {
    display: grid;
    justify-content: center;
  }
}
</style>
