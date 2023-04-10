<script setup>
import ChessBoard from './components/ChessBoard.vue'
import Log from './components/Log.vue'
</script>

<template>
    <main class="page">
        <header class="header">
            <h1>Chess.com - FrontEnd test</h1>
        </header>
        <main class="main">
            <ChessBoard />
        </main>
        <aside class="sidebar">
            <h1>Sidebar</h1>
            <Log />
        </aside>
        <footer class="footer">
            <p>Made with love & <a href="https://vitejs.dev/" target="_blank" rel="noreferrer noopener">vite</a> for Chess.com.</p>
        </footer>
    </main>
</template>

<style scoped>
.page {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 68px 1fr 1fr 56px;
    grid-template-areas:
        'header'
        'main'
        'sidebar'
        'footer';
}

@media (min-width: 768px) {
    .page {
        grid-template-columns: 1fr 20rem;
        grid-template-rows: 68px auto 56px;
        grid-template-areas:
            'header sidebar'
            'main sidebar'
            'footer sidebar';
    }
}

.header,
.main,
.sidebar,
.footer {
    padding: 0 2rem;
}

.header {
    grid-area: header;
}

.main {
    grid-area: main;
}

.sidebar {
    grid-area: sidebar;
    background-color: var(--background-color-sidebar);
}

.footer {
    grid-area: footer;
}
</style>
