import {createElement} from '../lib/create-element.js';
import rest from '../lib/rest.js';

const home = () => {
	const button = createElement('button', {class: 'btn'})
		.appendText('Load first todo')
		.on('click', async event_ => {
			const firstTodo = await rest.get('todos').json();
			console.log('Todo loaded:', firstTodo);
			const div = event_.target.parentElement;
			div.textContent = firstTodo.title + ' is completed? ' + firstTodo.completed;
		});

	const Home = createElement('div', null, button)
		.setStyle({background: 'lightGrey', height: '200px', width: '300px'})
		.on('click', event_ => {
			event_.target.setStyle({background: 'lightgreen'});
		});

	return Home;
};

export default home;
