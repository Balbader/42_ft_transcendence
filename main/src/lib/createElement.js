const createElement = (tagName, attributes, ...children) => {
    const element = document.createElement(tagName);

    Object.entries(attributes || {}).forEach(([key, value]) => {
        element[key] = value;
    });

    children.forEach(child => {
        console.log('child')
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });

    element.setStyle = styles => {
        Object.assign(element.style, styles);
        return element;
    };

    element.appendText = text => {
        element.appendChild(document.createTextNode(text));
        return element;
    };

    element.on = (eventType, eventHandler) => {
        element.addEventListener(eventType, (e) => {
            eventHandler(e.target)
        });
        return element;
    };

    return element;
};

export { createElement }
