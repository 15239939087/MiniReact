/**
 * 将虚拟 DOM 转换为真实 DOM 并添加到容器中
 * @param {element} 虚拟 DOM
 * @param {container} 真实 DOM
 */
export function render(element, container) {
  const dom = createDom(element);
  // 添加到容器
  container.appendChild(dom);
}

/**
 * 创建DOM
 * @param {*} fiber fiber节点
 * @returns dom 真实dom节点
 */
function createDom(fiber) {
  // 处理文本节点和标签节点
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);

  // 为节点绑定属性
  const isProperty = (key) => key !== "children";

  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = fiber.props[name];
    });
  return dom;
}
