import { defineStore } from 'pinia'

export const useLogStore = defineStore('log', {
    state: () => ({ logEntries: [] }),
    getters: {
        getLog() {
            return this.logEntries
        }
    },
    actions: {
        addLogEntry(entry) {
            this.logEntries.push(entry)
        },
    },
})