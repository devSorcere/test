import "../../icons.font";
import "../styles/style.scss";
import "../css/main.css";
import "../css/app.css";
import "../css/output.css";


// Import Packages
import {
  Tab,
  Collapse,
  initTE,
} from "tw-elements";

// Import Components
import header from "./components/header";
import slider from "./components/slider";
import select from "./components/select";
import Inputs from "./components/input";

// Document Loaded
document.addEventListener("DOMContentLoaded", () => {
  initTE({ Tab, Collapse });
  header.init();
  slider.init();
  select.init();
  Inputs.init();
});
