import { createElement } from '../lib/create-element.js';

const ui_lib = () => {

    const btnPrimary = (text) => {
        createElement(
            'button',
            { class: `btn btn-outline-dark` },
        ).appendText(text).on('click', async () => {
            console.log('Hello from Canvas.');
        });
    };

    const appDiv = createElement(
        'div',
        { class: 'container' },
    );

    appDiv.append(btnPrimary('Login'));
    console.log(appDiv)
    return appDiv;
}

export default ui_lib;
