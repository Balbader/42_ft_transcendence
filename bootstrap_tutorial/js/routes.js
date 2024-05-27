'use strict'

const routes = {
    '': './home.js',
    'home': './home.js',
    'about': './about.js',
    'whoWeAre': './whoWeAre.js',
    'login': './login.js',
    'SignUp': './pong.js',
};

function navigateTo(path) {
    const scriptPath = routes[path];
    if (!scriptPath) {
        console.error(`No script found for path ${path}`);
        return;
    }

    fetch(scriptPath)
        .then(response => response.text())
        .then(scriptText => {
            const appDiv = document.getElementById('app');
            appDiv.innerHTML += scriptText;
            // document.body.appendChild(appDiv);
        })
        .catch(error => {
            console.error(`Error loading script for ${path}: ${error}`);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    navigateTo('');
    document.querySelectorAll('a[href]').forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();
            const path = event.target.getAttribute('href');
            window.history.pushState({}, window.location.origin + '/' + path);
            navigateTo(path);
        });
    });

});
