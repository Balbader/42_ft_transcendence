import { createElement } from "../lib/create-element.js";
const whoWeAre = () => {
  const div = createElement('div');
  const hello = `<p>hello from the whoWeAre page.</p>`;
  div.append(hello);
  return div;
};
export default whoWeAre;