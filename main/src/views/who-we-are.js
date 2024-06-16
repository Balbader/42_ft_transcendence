const whoWeAre = () => {
    const div = document.createElement('div');
    const hello = <p>hello from the whoWeAre page.</p>;
    div.appendChild(hello);
    return div;
};

export default whoWeAre;
