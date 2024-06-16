import { Page } from "@nakedjsx/core/page";

const BodyContent = ({ title }) => (
  <>
    <h1 css="color: fuchsia">{title}</h1>
    <p css="color: #ff00ff">Building HTML files from JSX feels right.</p>
  </>
);

Page.Create("en");
Page.AppendCss("body { font-family: sans-serif }");
Page.AppendHead(<title>Hello NakedJSX</title>);

// Make the BodyContent JSX function available to browser JavaScript
Page.AppendJs(BodyContent);

// Add some code that will run when a browser loads the page
Page.AppendJs(
  document.body.appendChild(<BodyContent title="Hello NakedJSX" />)
);

Page.Render();
