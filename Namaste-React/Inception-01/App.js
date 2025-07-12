const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello React Devs..!"
); // this returns js object and not a tag.

const parentDiv = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    { id: "child" },
    // React.createElement("h1", {}, "I am a tag in HTML") //This can be single tag or an array of children.
    [
      React.createElement("h1", {}, "I am a tag in H1 HTML"),
      React.createElement("h4", {}, "I am a tag in H4 HTML"),
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);
