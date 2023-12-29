<template>
    <div class="notes">
        <button class="add-note">
            <img src="../assets/add-note.svg" alt="add-note-icon">
        </button>
    </div>
</template>

<script>


export default {
    name: 'TheNotes'
}
</script>

<style lang="scss">
    .notes {
        .add-note {
            width: 56px;
            height: 56px;
            border: none;
            border-radius: 32px;
            background: #B1C909;
            position: absolute;
            bottom: 40px;
            right: 40px;
        }
    }
</style>