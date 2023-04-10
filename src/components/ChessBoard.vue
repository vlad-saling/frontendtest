<script setup>
import { useLogStore } from '../stores/logStore'
const logStore = useLogStore()
</script>

<script>

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
            @click="logStore.addLogEntry(tile)"
            :class="{ active: logStore.getLog.includes(tile) }"
        >
            <span>{{ tile }}</span>
        </button>
    </div>
</template>

<style scoped>
.board {
    display: flex;
    flex-wrap: wrap;
}

@media (min-width: 768px) {
    .board {

    }
}

.tile {
    aspect-ratio: 1;
    background-color: var(--light-tile-color);
    position: relative;
    padding: 0;
    margin: 0;
    border: 1px solid var(--border-color);
    flex-basis: calc(100% / 8);
}

.tile.active {
    font-weight: bold;
}

.tile > span {
    position: absolute;
    top: 5px;
    left: 5px;
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
