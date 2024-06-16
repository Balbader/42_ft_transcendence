import { createElement } from '../lib/create-element.js';

const ui_lib = () => {

    const btnPrimary = () => {
        createElement(
            'button',
            { class: `btn btn-outline-dark` },
        )
            .appendText('Login')
            .on('click', async () => {
                console.log('Hello from Canvas.');
            });
    };

    const appDiv = createElement(
        'div',
        { class: 'container' },
    ).appendText('div');

    appDiv.append(btnPrimary);
    return appDiv;
}

export default ui_lib;
