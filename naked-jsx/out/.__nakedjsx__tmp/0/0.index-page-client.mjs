const BodyContent = ({
  title
}) => <>
    <h1 css="color: fuchsia">{title}</h1>
    <p css="color: #ff00ff">Building HTML files from JSX feels right.</p>
  </>;

document.body.appendChild(<BodyContent title="Hello NakedJSX" />);