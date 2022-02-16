import React from "./MiniReact";

const element = (
  <div id="foo">
    <button>bar</button>
  </div>
);

React.render(element, document.getElementById("root"));
