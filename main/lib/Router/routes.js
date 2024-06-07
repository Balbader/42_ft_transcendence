const routes = {
    "": "views/home.js",
    home: "views/home.js",
    about: "views/about.js",
    whoWeAre: "views/whoWeAre.js",
    pong: "views/pong.js",
    login: "views/login.js",
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

const renderRoute = async () => {
    const scriptPath = routes[router.currentRoute()]; // use the default route if no script is found for the path
    const appDiv = document.getElementById('app');
    console.log(appDiv);
    const view = await import(scriptPath);
    console.log(view);
    appDiv.innerHTML = view();
};

export { renderRoute, router };
