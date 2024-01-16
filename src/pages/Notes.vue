<template>
  <div class="notes">
    <div
      class="notes__list"
      v-for="note in notes"
      :key="note.id"
    >
      <OneNote
        :note_header="note.title"
        :note_text="note.content"
        :note_id="note.id"
        @deleteNote="deleteNote"
      />
    </div>
    <div class="notes__footer">
      <button
        class="add-note"
        @click="openModalNote(true)"
      >
        <img
          src="../assets/add-note.svg"
          alt="add-note-icon"
        />
      </button>
    </div>

    <NewNoteModal
      v-if="is_open_modal_note"
      @pushNewNoteData="pushNewNoteData"
      @openModalNote="openModalNote"
    />
  </div>
</template>

<script>
import OneNote from "@/components/OneNote.vue";
import NewNoteModal from "@/components/NewNoteModal.vue";
import { getNotes } from "../utils/Api";

export default {
  name: "TheNotesPage",
  components: {
    OneNote,
    NewNoteModal,
  },

  data: () => ({
    notes: [],
    is_open_modal_note: false,
  }),

  methods: {
    openModalNote(status) {
      this.is_open_modal_note = status;
    },

    pushNewNoteData(dataNewNote) {
      this.notes.push(dataNewNote);
    },

    deleteNote(idNote) {
      this.notes = this.notes.filter(
        (note) => note.id !== idNote
      );
    },
  },

  async created() {
    await getNotes()
      .then((response) => response.json())
      .then((data) => {
        this.notes = data;
      })
      .catch((err) => {
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
