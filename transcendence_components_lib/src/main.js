import { Button } from './components/index.js'
import { Card } from './components/index.js'
import { EntryForm } from './components/index.js'

const app = document.getElementById('app');
const button = new Button('Click Me', () => alert('Button clicked.'));
const card = new Card('Card Title', 'This is the card content.');
const form = new EntryForm('app');

app.appendChild(button.render());
app.appendChild(card.render());
form.renderForm();
