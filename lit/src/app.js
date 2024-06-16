import { renderRoute, router } from './lib/router/routes.js';

document.addEventListener('DOMContentLoaded', () => {

    //NOTE: Handle navigation
    document.addEventListener(
        'click',
        event => {
            const isAnchor = event.target.nodeName === 'A';

            if (!isAnchor) {
                return;
            }

            event.preventDefault();

            const path = event.target.getAttribute('href');

            router.goTo(path);

            renderRoute(path);
        },
        true,
    );
});
