  import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import App from "./App.jsx";

// Contexts
import { AppProvider } from "./context/AppContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ConfigProvider } from "./context/ConfigContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider>
      <AuthProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </AuthProvider>
    </ConfigProvider>
  </React.StrictMode>
);