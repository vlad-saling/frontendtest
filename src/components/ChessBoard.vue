<script>
import { mapState } from 'pinia'
import { useLogStore } from '../stores/logStore'
export default {
    name: "ChessBoard",
    data() {
        return {
            tiles: []
        }
    },
    created() {
        this.generateBoard();
    },
    computed: {
        ...mapState(useLogStore, ['logEntries', 'addLogEntry'])
    },
    methods: {
        generateBoard() {
            const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            const numbers = [8, 7, 6, 5, 4, 3, 2, 1];
            const tiles = [];
            const totalTiles = numbers.length * letters.length;

            // I am generating this for the purpose of the tech demo, but IRL I'd just have a hardcoded list with all the options, because layout of the chessboard is a constant by nature.
            for (let i = 0; i < totalTiles; i++) {
                const letterIndex = i % letters.length;
                const numberIndex = Math.floor(i / numbers.length);
                tiles.push(letters[letterIndex] + numbers[numberIndex]);
            }

            this.tiles = tiles;
        },
        recordClick(tile) {
            // make sure tile is not already in the log
            if (!this.logEntries.includes(tile)) {
                this.addLogEntry(tile);
            }
        },
        isAlreadyActive(tile) {
            return this.logEntries.includes(tile);
        }
    }
}
</script>

<template>
    <div class="board">
        <button
            v-for="tile in tiles"
            :key="tile"
            class="tile"
            type="button"
            :data-cy="tile"
            @click="recordClick(tile)"
            :class="{ active: isAlreadyActive(tile) }"
        >
            <span class="coord">{{ tile }}</span>
        </button>
    </div>
</template>

<style scoped>
.board {
    display: flex;
    flex-wrap: wrap;
}

.tile {
    aspect-ratio: 1;
    background-color: var(--light-tile-color);
    position: relative;
    padding: 0;
    margin: 0;
    border: 1px solid var(--border-color);
    flex-basis: calc(100% / 8);
    transition: all 0.2s ease-in-out;
}

.tile.active {
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.85) inset;
}

.tile > .coord {
    font-size: 8px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
    border-bottom-right-radius: 5px;
    background-color: #ffffd7;
    box-shadow: -1px -1px 3px 1px rgba(0,0,0,0.25) inset;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    transition: all 0.2s ease-in-out;
}

@media (min-width: 768px) {
    .tile > .coord {
        font-size: 12px;
    }
}

.tile.active > .coord {
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

.tile:nth-child(-2n+8),
.tile:nth-child(8) ~ .tile:nth-child(-2n+15),
.tile:nth-child(16) ~ .tile:nth-child(-2n+24),
.tile:nth-child(24) ~ .tile:nth-child(-2n+31),
.tile:nth-child(32) ~ .tile:nth-child(-2n+40),
.tile:nth-child(40) ~ .tile:nth-child(-2n+47),
.tile:nth-child(48) ~ .tile:nth-child(-2n+56),
.tile:nth-child(56) ~ .tile:nth-child(-2n+63) {
    background-color: var(--dark-tile-color);
}
</style>
