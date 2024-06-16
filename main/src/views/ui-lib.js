import { createElement } from '../lib/create-element.js';
import { LitElement, html } from 'lit';

// const ui_lib = () => {
//
//     const btnPrimary = () => {
//         createElement(
//             'button',
//             { class: `btn btn-outline-dark` },
//         )
//             .appendText('Login')
//             .on('click', async () => {
//                 console.log('Hello from Canvas.');
//             });
//     };
//
//     const appDiv = createElement(
//         'div',
//         { class: 'container' },
//     ).appendText('div');
//
//     appDiv.append(btnPrimary);
//     return appDiv;
// }
//
// export default ui_lib;

class ui_lib extends LitElement {
    render() {
        return html`
            <div>Hello from ui_lib</div>
        `;
    }
}

customElements.define('ui_lib', ui_lib);
