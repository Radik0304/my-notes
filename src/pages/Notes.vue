<template>
    <div class="notes">
        <div class="notes__list">
            <OneNote/>
        </div>
        <div class="notes__footer">
            <button class="add-note" @click="openModal">
                <img src="../assets/add-note.svg" alt="add-note-icon">
            </button>
        </div>
    </div>
</template>

<script>
import OneNote from '@/components/OneNote.vue'

export default {
    name: 'TheNotesPage',
    components: {
        OneNote,
    },

    methods: {
        openModal() {
            this.$emit('openModalNote', true)
        },
    },
}
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
            background: #B1C909;
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