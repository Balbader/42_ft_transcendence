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

const renderRoute = async (path) => {
  const scriptPath = routes[router.currentRoute()]; // use the default route if no script is found for the path
  console.log(scriptPath);
  const appDiv = document.getElementById("app");

  // clear the appDiv's content before loading the new script
  while (appDiv.firstChild) {
    appDiv.removeChild(appDiv.firstChild);
  }

  const response = await fetch(scriptPath);
  const script = document.createElement("script");
  script.textContent = await response.text();
  appDiv.appendChild(script);
};

export { renderRoute, router };
