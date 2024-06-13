import { Button, Card } from './components/index.js'

const app = document.getElementById('app');
const button = new Button('Click Me', () => alert('Button clicked.'));
const card = new Card('Card Title', 'This is the card content.');

app.appendChild(button.render());
app.appendChild(card.render());
