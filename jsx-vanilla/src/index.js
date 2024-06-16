/**@jsx dom */
import dom from "./tools/dom";
const element = (
  <div>
    <div>
      <h1>Hello from div prop</h1>
      <button class="btn btn-primary">Click Me</button>
    </div>
  </div>
);

const appDiv = document.getElementById("app");
appDiv.appendChild(element);
console.log(appDiv);
