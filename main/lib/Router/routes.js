import about from "../../views/about.js";
import home from "../../views/home.js";
import pong from "../../views/pong.js";
import whoWeAre from "../../views/whoWeAre.js";

const routes = {
    home:home,
    about: about,
    whoWeAre: whoWeAre,
    pong: pong,

};

const Router = () => {
    const state = ["home"];

    const goTo = (path) => {
        state.push(path);
    };

    const goBack = () => {
        if (state.length === 1) return;
        state.pop();
    };

    const currentRoute = () => {
        return state.at(-1);
    };

    return {
        goTo,
        goBack,
        currentRoute,
    };
};

const router = Router();

const renderRoute = async (route) => {
    const appDiv = document.getElementById("app");
    const currentRoute = route ?? router.currentRoute()
    const Component = routes[currentRoute];
    appDiv.innerHTML = "";

    if (typeof Component === "function") {
            appDiv.appendChild(Component());
    }
     else {
       throw('you must provide an element as a page')
    }

};
export { renderRoute, router };
