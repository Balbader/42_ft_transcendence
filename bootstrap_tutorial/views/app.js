'use strict'

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
