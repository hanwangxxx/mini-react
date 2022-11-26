import { createElement, render } from "./mini-react";

const element = createElement(
  "h1",
  { id: "title", style: 'background: skyblue; color: red' },
  "Hello ",
  createElement("span", null, "World")
);



const container = document.querySelector("#root")
render(element,container)