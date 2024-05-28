'use strict';

const routes = {
    '': 'views/home.js',
    'home': 'views/home.js',
    'about': 'views/about.js',
    'whoWeAre': 'views/whoWeAre.js',
    'pong': 'views/pong.js',
    'login': 'views/login.js',
    'SignUp': 'views/login.js',
};

const renderRoute = (path) => {
    const scriptPath = routes[path] || routes['']; // use the default route if no script is found for the path
    const appDiv = document.getElementById('app');

    // clear the appDiv's content before loading the new script
    while (appDiv.firstChild) {
        appDiv.removeChild(appDiv.firstChild);
    }

    fetch(scriptPath)
        .then(response => response.text())
        .then(scriptText => {
            const script = document.createElement('script');
            script.textContent = scriptText;
            appDiv.appendChild(script);
        })
        .catch(error => {
            console.error(`Error loading script for ${path}: ${error}`);
        });
};
