import React from "./MiniReact";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>我是</h1>
        <h2>class组件</h2>
      </div>
    );
  }
}

const element = <App />;

console.log(element);

React.render(element, document.getElementById("root"));
