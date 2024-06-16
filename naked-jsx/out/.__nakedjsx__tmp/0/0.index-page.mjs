import { Page, jsx } from 'file:///home/balou/.npm/_npx/6a1e40069ad591f7/node_modules/nakedjsx/node_modules/@nakedjsx/core/runtime/page/page.mjs';
Page.Create("en");
Page.AppendCss("body { font-family: sans-serif }");
Page.AppendHead(jsx("title", {
  children: "Hello NakedJSX"
}));

// Make the BodyContent JSX function available to browser JavaScript
Page.AppendJs("const BodyContent = ({\n  title\n}) => <>\n    <h1 css=\"color: fuchsia\">{title}</h1>\n    <p css=\"color: #ff00ff\">Building HTML files from JSX feels right.</p>\n  </>;");

// Add some code that will run when a browser loads the page
Page.AppendJs("document.body.appendChild(<BodyContent title=\"Hello NakedJSX\" />)");
await Page.Render();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5pbmRleC1wYWdlLm1qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2luZGV4LXBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpudWxsLCJuYW1lcyI6WyJQYWdlIiwiQ3JlYXRlIiwiQXBwZW5kQ3NzIiwiQXBwZW5kSGVhZCIsIl9qc3giLCJjaGlsZHJlbiIsIkFwcGVuZEpzIiwiUmVuZGVyIl0sIm1hcHBpbmdzIjoiO0FBU0FBLElBQUksQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNqQkQsSUFBSSxDQUFDRSxTQUFTLENBQUMsa0NBQWtDLENBQUM7QUFDbERGLElBQUksQ0FBQ0csVUFBVSxDQUFDQyxHQUFBLENBQUEsT0FBQSxFQUFBO0VBQUFDLFFBQUEsRUFBTztBQUFjLENBQU8sQ0FBQyxDQUFDOztBQUU5QztBQUNBTCxJQUFJLENBQUNNLFFBQVEsQ0FBQSw2S0FBWSxDQUFDOztBQUUxQjtBQUNBTixJQUFJLENBQUNNLFFBQVEsQ0FBQSxxRUFFYixDQUFDO0FBRUQsTUFBQU4sSUFBSSxDQUFDTyxNQUFNLENBQUUsQ0FBQSJ9
