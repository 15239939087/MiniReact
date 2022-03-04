import React from "./MiniReact";

function App(props) {
  return <h1>H1,{props.name}!</h1>;
}

const element = <App name="我是大王派来测试的小demo" />;

console.log(element);

React.render(element, document.getElementById("root"));
