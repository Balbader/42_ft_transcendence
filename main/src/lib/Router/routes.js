import about from '../../../views/about.js';
import home from '../../../views/home.js';
import whoWeAre from '../../../views/whoWeAre.js';
import login from '../../../views/login.js';

const routes = {
	home,
	about,
	whoWeAre,
	login,
};

const router = () => {
	let state = [window.location.pathname.replace('/', 'home')];

	const goTo = path => {
		state.push(path);
		window.history.pushState({path}, '', `/${path}`);
		// RenderRoute();
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
		// RenderRoute();
	});

	return {
		goTo,
		goBack,
		currentRoute,
	};
};

const route = router();

const renderRoute = () => {
	const appDiv = document.querySelector('#app');
	const currentRoute = router.currentRoute();
	const component = routes[currentRoute]?.();

	if (!component) {
		return appDiv.replaceChildren('404 not found');
	}

	appDiv.replaceChildren(component);
};

export {renderRoute, route};
