import { renderRoute, router } from './lib/Router/routes.js';
import { Header } from './components/header.js';
// To review our createElement fnc , try to build the header component with it
// try to handle navigation without the use of document listener and use the router instead
// is to allow component to be async, an example of that would be a page that loads data from the server
// our component they need to manage state
// auth ?????

const Layout = () => {
    Header();
    renderRoute(window.location.pathname);
};

document.addEventListener('DOMContentLoaded', () => {
    // Load initial route
    //   layout
    Layout();

    // Handle navigation
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

    // Handle the browser's back and forward buttons
    // window.addEventListener("popstate", (event) => {
    //     const path =
    //         event.state && event.state.path
    //             ? event.state.path
    //             : window.location.pathname;
    //
    //     renderRoute(path);
    // });
});
