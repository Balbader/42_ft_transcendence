import { renderRoute, router } from "./lib/Router/routes.js";

document.addEventListener("DOMContentLoaded", () => {

    // load initial route
    // renderRoute(window.location.pathname);

    // Handle navigation
    document.addEventListener("click", (event) => {

        const isAnchor = event.target.nodeName === 'a';
        console.log(event.target);
        console.log('isAnchor: ', isAnchor);

        if (!isAnchor) return;
        console.log('isAnchor: ', isAnchor);

        event.preventDefault();

        const path = event.target.getAttribute('href');

        router.goTo(path);

        renderRoute(path);
    }, true);

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
