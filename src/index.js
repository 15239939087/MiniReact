import React from "./MiniReact";

const element = (
  <div id="foo">
    <div>
      <p>我是p</p>
      <p>我是p</p>
    </div>
    <button
      onclick={() => {
        console.log("demo");
      }}
    >
      bar
    </button>
    <button>bar</button>
    <button>bar</button>
  </div>
);

const a = <p>我是p</p>;
console.log(a);
console.log(element);

React.render(element, document.getElementById("root"));
