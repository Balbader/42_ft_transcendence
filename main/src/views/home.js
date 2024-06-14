import {createElement} from '../lib/createElement.js';

const home = () => {
	const button = createElement('button', {class: 'btn'})
		.appendText('this it a button')
		.on('click', () => console.log('Button was clicked.'));

	const Home = createElement('div', null, button)
		.setStyle({background: 'lightGrey', height: '200px', width: '300px'})
		.on('click', element => {
			element.setStyle({background: 'lightgreen'});
		});

	return Home;
};

export default home;
