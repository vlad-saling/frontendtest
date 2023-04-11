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
    <button class="resetButton" type="button" @click="logStore.$reset" data-cy="reset">Clear log</button>
    <ul class="log" data-cy="sidebar">
        <li v-for="(logEntry, index) in logStore.logEntries" :key="logEntry.id">
            {{ index + 1 }}. {{ logEntry }}
        </li>
    </ul>
</template>

<style scoped>
.log {
    list-style: none;
    padding: 0;
    overflow: auto;
}

.resetButton {
    border-radius: .5rem;
    border: none;
    background-color: var(--accent-color);
    color: #fff;
    padding: .5rem 1rem;
}
</style>