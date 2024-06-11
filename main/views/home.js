import { createElement } from "../lib/createElement.js";

const home = () => {
    const Home = createElement('div')
    .setStyle({background:'red',height:'200px',width:'300px'})
    .on('click',()=>alert('hello'))
    return Home;
};

export default home;



