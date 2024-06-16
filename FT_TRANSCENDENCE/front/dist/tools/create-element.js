const createElement = (tagName, attributes, ...children) => {
  const element = document.createElement(tagName);
  for (const [key, value] of Object.entries(attributes || {})) {
    element.setAttribute(key, value);
  }
  element.append(...children);
  element.setStyle = styles => {
    Object.assign(element.style, styles);
    return element;
  };
  element.appendText = text => {
    element.append(text);
    return element;
  };
  element.on = (eventType, eventHandler, options) => {
    element.addEventListener(eventType, eventHandler, options);
    return element;
  };
  return element;
};

// const createElement = (tagName, attributes, ...children) => {
//   const element = document.createElement(tagName);

//   for (const [key, value] of Object.entries(attributes || {})) {
//     element.setAttribute(key, value);
//   }

//   element.append(...children);

//   element.setStyle = (styles) => {
//     Object.assign(element.style, styles);
//     return element;
//   };

//   element.appendText = (text) => {
//     element.append(text);
//     return element;
//   };

//   element.on = (eventType, eventHandler, options) => {
//     element.addEventListener(eventType, eventHandler, options);
//     return element;
//   };

//   return element;
// };

export { createElement };