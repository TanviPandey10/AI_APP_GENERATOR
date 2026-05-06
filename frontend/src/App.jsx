 import { useState } from "react";
import AppRenderer from "./core/render/AppRenderer.jsx";
import { useConfig } from "./hooks/useConfig";
import { useAuth } from "./context/AuthContext.jsx";
import Login from "./pages/login";

function App() {
  const { config } = useConfig();
  const { user } = useAuth();
  const [lang, setLang] = useState("en");

  if (!config) return <div>Loading...</div>;

  // Auth check
  if (config.auth?.enabled && !user) {
    return <Login />;
  }

  return (
    <div>
      {/* Language Switch */}
      <div style={{ textAlign: "right", padding: "10px" }}>
        <button
          onClick={() => setLang("en")}
          style={{
            fontWeight: lang === "en" ? "bold" : "normal",
          }}
        >
          EN
        </button>

        <button
          onClick={() => setLang("hi")}
          style={{
            marginLeft: "10px",
            fontWeight: lang === "hi" ? "bold" : "normal",
          }}
        >
          HI
        </button>
      </div>

      {/* Main App */}
      <AppRenderer
        config={config}
        lang={lang}
        user={user}
      />
    </div>
  );
}

export default App;