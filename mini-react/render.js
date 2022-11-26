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

// recursivly run though the children to create the children node 

  element.props.children.forEach((child) => render(child, dom));

  // append children node to its parents
  container.append(dom);
}

export default render;
