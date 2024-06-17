/** @jsx createElement */

import createElement from "./tools/create-element.js";

const app = document.getElementById("app");

const handleClick = () => {
  console.log("Button was clicked!");
};

const button = ({ variant = "btn btn-outline-darck", text = "Click Me" }) =>
  createElement("button", `${variant}`, `${text}`).on("click", handleClick);

const textBlock = createElement(
  "div",
  { class: "container container-fluid" },
  "Hello World"
);

app.appendChild(textBlock);
app.appendChild(button);
console.log(app);
