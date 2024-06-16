/** @jsx createElement */
import createElement from "./tools/create-element.js";

const app = document.getElementById("app");

const handleClick = () => {
  console.log("Button was clicked!");
};

const button = createElement(
  "button",
  { className: "btn btn-primary" },
  "Click Me"
).on("click", handleClick);

app.appendChild(button);
