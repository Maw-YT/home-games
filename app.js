import { createApp } from 'vue';

const app = createApp({
    data() {
        return {
            games: []
        }
    },
    methods: {
        async loadGames() {
            try {
                const response = await fetch('games-config.json');
                this.games = await response.json();
            } catch (error) {
                console.error('Error loading games:', error);
            }
        },
        openGame(url) {
            window.location.href = url;
        }
    },
    mounted() {
        this.loadGames();
    }
});

app.mount('#app');

