/**
 * 将虚拟 DOM 转换为真实 DOM 并添加到容器中
 * @param {element} 虚拟 DOM
 * @param {container} 真实 DOM
 */
export function render(element, container) {
  const dom = createDom(element);

  // 使用递归 处理孩子节点
  element.props.children.forEach((child) => render(child, dom));
  // 添加到容器
  container.appendChild(dom);
}

/**
 * 创建DOM
 * @param {*} element element节点
 * @returns dom 真实dom节点
 */
function createDom(element) {
  // 处理文本节点和标签节点
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  // 为节点绑定属性
  const isProperty = (key) => key !== "children";

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  console.log(dom);
  return dom;
}
