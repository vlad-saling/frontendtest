import { defineStore } from 'pinia'

export const useLogStore = defineStore('log', {
    state: () => ({ logEntries: [] }),
    actions: {
        addLogEntry(entry) {
            this.logEntries.push(entry)
        },
    },
})