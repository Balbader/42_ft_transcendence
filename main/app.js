"use strict";

import { renderRoute, router } from "../views/routes.js";

document.addEventListener("DOMContentLoaded", () => {
    // load initial route
    renderRoute(window.location.pathname);

    // Handle navigation
    window.addEventListener("click", (event) => {
        const isAnchor = event.target.nodeName === "a";

        if (!isAnchor) return;

        event.preventDefault();

        const path = event.target.getAttribute("href");

        router.goTo(path);

        renderRoute(path);
    });

    // Handle the browser's back and forward buttons
    window.addEventListener("popstate", (event) => {
        const path =
            event.state && event.state.path
                ? event.state.path
                : window.location.pathname;

        renderRoute(path);
    });
});
