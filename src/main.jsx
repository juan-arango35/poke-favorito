import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Proveedor from "./context/Proveedor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Proveedor>
      <App />
    </Proveedor>
  </StrictMode>
);
