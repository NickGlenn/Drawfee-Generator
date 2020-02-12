import { h, render } from "preact";
import { MainView } from "./views/MainView";
import "./index.scss";

render(<MainView />, document.getElementById("app")!);