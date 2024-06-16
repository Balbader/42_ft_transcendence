/** @jsx createElement */
const createElement = (tag, attributes, ...children) => {
  const prop = document.createElement(tag);

  Object.keys(attributes || {}).forEach((key) => {
    if (key === "style") {
      Object.keys(attributes[key]).forEach((keyStyle) => {
        prop.style[keyStyle] = prop[key][keyStyle];
      });
    } else {
      prop[key] = attributes[key];
    }
  });

  const addChild = (child) => {
    if (Array.isArray(child)) {
      child.forEach((c) => addChild(c));
    } else if (typeof child === "object") {
      prop.appendChild(child);
    } else {
      prop.appendChild(document.createTextNode(child));
    }
  };

  prop.on = (eventType, eventHandler, options) => {
    prop.addEventListener(eventType, eventHandler, options);
    return prop;
  };

  prop.setStyle = (styles) => {
    Object.assign(element.style, styles);
    return prop;
  };

  (children || []).forEach((c) => addChild(c));

  return prop;
};

export default createElement;
