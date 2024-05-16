const routes = {
    '/': '<h2>Home</h2><p>Welcome to the home page!</p>',
    '/about': '<h2>About</h2><p>Learn more about us on this page.</p>',
    '/whoweare': '<h2>Who We Are</h2><p>Get in touch with us!</p>',
};

function renderRoute(path) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = routes[path] || '<h2>404</h2><p>Page not found</p>';
};
