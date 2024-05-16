document.addEventListener('DOMContentLoaded', () => {
    // Load initial route
    renderRoute('/');

    // Handle navigation
    document.querySelectorAll('a[data-link]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const path = event.target.getAttribute('data-link');
            window.history.pushState({}, path, window.location.origin + '/' + path);
            renderRoute('/' + path);
        });
    });

    // Handle browser navigation
    window.addEventListener('popstate', () => {
        renderRoute(window.location.pathname);
    });
});

