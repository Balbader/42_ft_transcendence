import { createElement } from "../lib/createElement.js";

const home = () => {
    const Home = createElement('div')
        .setStyle({ background: 'lightGrey', height: '200px', width: '300px' })
        .on('click', (element) => {
            element.setStyle({ background: 'lightgreen' })
        });
    return Home;
};

export default home;



