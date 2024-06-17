import { createElement } from '../lib/create-element.js';
const header = () => {
  const appDiv = document.querySelector('#app');
  const headerTag = createElement('section').appendText('hello header');
  appDiv.append(headerTag);
};
export { header };