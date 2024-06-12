import about from "../../../views/about.js";
import home from "../../../views/home.js";
import pong from "../../../views/pong.js";
import whoWeAre from "../../../views/whoWeAre.js";

const routes = {
  home: home,
  about: about,
  whoWeAre: whoWeAre,
  pong: pong,
};

const Router = () => {
  let state = [window.location.pathname.replace("/", "home")];

  const goTo = (path) => {
    state.push(path);
    window.history.pushState({ path }, "", `/${path}`);
    // renderRoute();
  };

  const goBack = () => {
    if (state.length === 1) return;
    state.pop();
    window.history.back();
  };

  const currentRoute = () => {
    return state.at(-1);
  };

  window.onpopstate = () => {
    state = [window.location.pathname.replace("/", "")];
    // renderRoute();
  };

  return {
    goTo,
    goBack,
    currentRoute,
  };
};

const router = Router();

const renderRoute = () => {
  const appDiv = document.getElementById("app");
  const currentRoute = router.currentRoute();
  const Component = routes[currentRoute]?.();

  if (!Component) return appDiv.replaceChildren("404 not found");

  appDiv.replaceChildren(Component);
};
export { renderRoute, router };
