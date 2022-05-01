import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

// React Components
import Header from "./header";
import App from "./app";

root.render(
  <section>
    <Header />
    <App />
  </section>
);
