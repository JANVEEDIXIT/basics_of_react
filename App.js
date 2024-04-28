const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste React from React"
);

const heading1 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Namaste React from React 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
