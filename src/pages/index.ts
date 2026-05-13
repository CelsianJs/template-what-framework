import { h } from "what-framework";

export default function HomePage() {
  return h("main", { class: "home" }, [
    h("h1", {}, ["Home"]),
    h("p", {}, ["This is your What Framework app."]),
  ]);
}
