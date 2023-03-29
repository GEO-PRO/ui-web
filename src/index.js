// eslint-disable-next-line import/no-extraneous-dependencies
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/css/bootstrap.min.css";
import "./assets/css/floating.css";
import "./assets/css/style.css";
import "./assets/css/main.css";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
