'use strict';

const routes = {
    '': 'js/home.js',
    'home': 'js/home.js',
    'about': 'js/about.js',
    'whoWeAre': 'js/whoWeAre.js',
    'login': 'js/login.js',
    'SignUp': 'js/pong.js',
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

document.addEventListener('DOMContentLoaded', () => {
    // load initial route
    renderRoute(window.location.pathname);

    // Handle navigation
    document.querySelectorAll('a[href]').forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();

            const path = event.target.getAttribute('href');

            window.history.pushState({ path }, null, path);

            renderRoute(path);
        });
    });

    // Handle the browser's back and forward buttons
    window.addEventListener('popstate', event => {
        const path = event.state && event.state.path ? event.state.path : window.location.pathname;

        renderRoute(path);
    });
});
