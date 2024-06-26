import about from '../../../views/about.js';
import home from '../../../views/home.js';
import whoWeAre from '../../../views/who-we-are.js';
import login from '../../../views/login.js';
import ui_lib from '../../views/ui-lib.js';

const routes = {
    home,
    about,
    whoWeAre,
    login,
    ui_lib
};

const createRouter = () => {
    let state = [window.location.pathname.replace('/', 'home')];

    const goTo = path => {
        state.push(path);
        window.history.pushState({ path }, '', `/${path}`);
    };

    const goBack = () => {
        if (state.length === 1) {
            return;
        }

        state.pop();
        window.history.back();
    };

    const currentRoute = () => state.at(-1);

    window.addEventListener('popstate', () => {
        state = [window.location.pathname.replace('/', '')];
    });

    return {
        goTo,
        goBack,
        currentRoute,
    };
};

const router = createRouter();

const renderRoute = () => {
    const appDiv = document.querySelector('#app');
    const currentRoute = router.currentRoute();
    const component = routes[currentRoute]?.();

    if (!component) {
        return appDiv.replaceChildren('404 not found');
    }

    appDiv.replaceChildren(component);
};

export { renderRoute, router };
