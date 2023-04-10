<script setup>
    import { useLogStore } from '../stores/logStore'
    const logStore = useLogStore()
</script>

<template>
    <button type="button" :data-cy="coordinates" @click="logStore.addLogEntry(coordinates)">clicked on tile</button>
</template>

<script>
export default {
    name: "ChessTile",
    props: {
        coordinates: String
    }
}
</script>

<style scoped>

</style>