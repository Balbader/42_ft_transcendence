import {createElement} from '../lib/createElement.js';

const Header = () => {
	const appDiv = document.querySelector('#app');
	console.log('header');
	console.log('appDiv', appDiv);
	const headerTag = createElement('section').appendText('hello header');
	appDiv.append(headerTag);
};

export {Header};
