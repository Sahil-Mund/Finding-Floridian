import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserModalProvider } from "./providers/ModalProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserModalProvider>
      <App />
    </UserModalProvider>
  </React.StrictMode>
);
