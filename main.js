import { createElement } from "./mini-react";

const element = createElement(
  "h1",
  { id: "title", style: { color: "red" } },
  "Hello ",
  createElement("span", null, "World")
);

console.log(element);