import { h } from "what-framework";

export function HelloWorld() {
  return h("div", { class: "hello" }, [
    h("h1", {}, ["Hello, World!"]),
    h("p", {}, ["Welcome to What Framework."]),
  ]);
}
