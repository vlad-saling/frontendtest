<script setup>
import { useLogStore } from '../stores/logStore'
const logStore = useLogStore()
</script>

<script>
export default {
    name: "Log"
}
</script>

<template>
    <ul class="log">
        <li v-for="logEntry in logStore.logEntries" :key="logEntry.id">
            {{ logEntry }}
        </li>
    </ul>
</template>

<style scoped>
.log {
    list-style: none;
    padding: 0;
}
</style>