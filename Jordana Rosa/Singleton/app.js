import AppConfig from './app-config.js';

const config = AppConfig.getInstance();

document.getElementById('fetchButton').addEventListener('click', () => {
    config.fetchData();
});
