import { Button } from './components/index.js'
import { Card } from './components/index.js'
import { LoginForm } from './components/index.js'

const app = document.getElementById('app');
const button = new Button('Click Me', () => alert('Button clicked.'));
const card = new Card('Card Title', 'This is the card content.');
const loginForm = new LoginForm('app');

// app.appendChild(button.render());
// app.appendChild(card.render());
