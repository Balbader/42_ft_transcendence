/** @jsx dom */

import "./components/buttons/test-button/test-button.js";
import createElement from "./tools/create-element.js";

const dom = (tag, attributes, ...children) => {
  const prop = document.createElement(tag);

  Object.keys(attributes || {}).forEach((key) => {
    if (key === "style") {
      Object.keys(attributes[key]).forEach((value) => {
        prop.style[value] = prop[key][value];
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

  (children || []).forEach((c) => addChild(c));

  return prop;
};

const app = document.getElementById("app");

// const handleClick = () => {
//   console.log("Button was clicked!");
// };

// const button = ({ variant = "btn btn-outline-darck", text = "Click Me" }) => {
//   const btn = createElement("button", `${variant}`, `${text}`).on(
//     "click",
//     handleClick
//   );
//   return btn;
// };

// const button = createElement("button", {}, "Click Me").on("click", handleClick);

// const button = <test-button></test-button>;

const button1 = createElement(
  "button",
  {},
  `<div class="container container-fluide">
    <h1>Test Button with lit</h1>
  </div>`
);
// ${(<test-button class="btn btn-primary"></test-button>)}

// const textBlock = createElement("div", {}, "Hello World");

// app.appendChild(textBlock);
// app.appendChild(button);
app.appendChild(button1);
console.log(app);
