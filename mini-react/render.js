function render(element, container) {
  //create parent node
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode(element.props.nodeValue)
      : document.createElement(element.type);

  // append props to the parent node(exclude children key in props)
  Object.keys(element.props)
    .filter((key) => key !== "children")
    .forEach((key) => (dom[key] = element.props[key]));

  // recursivly run though the children to create and render the children node

  element.props.children.forEach((child) => render(child, dom));

  // append children node to its parents
  container.append(dom);
}

let nextUnitOfWork = null;

function workLoop(deadLine) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadLine.timeRemaining() < 1;
  }
  //browder have no free time, workLoop will excute when next available time/Idle time
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(work) {}

export default render;
