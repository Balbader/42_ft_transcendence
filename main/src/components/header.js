import { createElement } from '../lib/create-element.js';

const header = () => {
  const appDiv = document.querySelector('#app');
  console.log('header');
  console.log('appDiv', appDiv);
  const headerTag = createElement('section').appendText('hello header');
  appDiv.append(headerTag);
};

export { header };

const hello = () => {
  return hello;
}
