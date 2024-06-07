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
  const appDiv = document.getElementById("app");
  const view = await import(`http://localhost:3000/${scriptPath}`);
  const finalView = view.default();
  typeof finalView === "string"
    ? (appDiv.innerHTML = finalView)
    : appDiv.replaceChild(view.default(), appDiv.children[0]);
};

export { renderRoute, router };
