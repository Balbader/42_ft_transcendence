'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    const contentDiv = document.getElementById('app');

    // assign the right page to the loadPage function
    links.forEach(link => {
        link.addEventListener('click', () => {
            const page = link.getAttribute('data-link');
            loadPage(page);
        });
    });


    const loadPage = (page) => {
        // clear existing content
        contentDiv.innerHTML = '';

        // Remove any previously loaded scritps
        const oldScript = document.getElementById('dynamic-script');
        if (oldScript) { oldScript.remove(); };

        // Load new content
        contentDiv.innerHTML = `<h1>${page.charAt(0).toUpperCase() + page.slice(1)} Page</h1>`;

        // Dynamically load the corresponding JavaScript file
        const script = document.createElement('script');
        script.id = 'dynamic-script';
        script.src = `js/${page}.js`;
        script.onload = () => {
            console.log(`${page}.js loaded!`);
        };

        document.body.appendChild(script);
    };

    // Load the home page by default on initial load/refresh
    loadPage('home');
});
