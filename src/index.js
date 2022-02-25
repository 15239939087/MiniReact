// src/index
import React from "./MiniReact";

const element = (
  <div>
    <h1>
      <p />
      123
      <a />
    </h1>
    <h2 />
  </div>
);

console.log(element);

React.render(element, document.getElementById("root"));
