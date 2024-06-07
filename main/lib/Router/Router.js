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

export { router };
