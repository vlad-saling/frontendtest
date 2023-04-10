<script setup>
import ChessTile from './ChessTile.vue'
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
            // flip loop above to generate board letters first
            for (let i = 0; i < numbers.length; i++) {
                for (let j = 0; j < letters.length; j++) {
                    tiles.push(letters[j] + numbers[i]);
                }
            }
            this.tiles = tiles;
        }
    }
}
</script>

<template>
    <div class="board">
        <div v-for="tile in tiles" :key="tile" class="tile">
            <ChessTile :coordinates="tile" />
        </div>
    </div>
</template>

<style scoped>
.board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
}
</style>
