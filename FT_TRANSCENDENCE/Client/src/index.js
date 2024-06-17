/** @jsx createElement */

import createElement from "./tools/create-element.js";

const app = document.getElementById("app");

const handleClick = () => {
  console.log("Button was clicked!");
};

// const button = ({ variant = "btn btn-outline-darck", text = "Click Me" }) => {
//   const btn = createElement("button", `${variant}`, `${text}`).on(
//     "click",
//     handleClick
//   );
//   return btn;
// };

const button = createElement("button", {}, "Click Me").on("click", handleClick);

const textBlock = createElement("div", {}, "Hello World");

app.appendChild(textBlock);
app.appendChild(button);
console.log(app);
