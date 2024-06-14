const createElement = (tagName, attributes, ...children) => {
	const element = document.createElement(tagName);

	for (const [key, value] of Object.entries(attributes || {})) {
		element.setAttribute(key, value);
	}

	for (const child of children) {
		console.log('child');
		if (typeof child === 'string') {
			element.append(document.createTextNode(child));
		} else {
			element.append(child);
		}
	}

	element.setStyle = styles => {
		Object.assign(element.style, styles);
		return element;
	};

	element.appendText = text => {
		element.append(document.createTextNode(text));
		return element;
	};

	element.on = (eventType, eventHandler) => {
		element.addEventListener(eventType, event => {
			eventHandler(event.target);
		});
		return element;
	};

	return element;
};

export {createElement};
