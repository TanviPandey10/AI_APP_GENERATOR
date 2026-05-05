 import { useState } from "react";
import AppRenderer from "./core/render/AppRenderer.jsx";
import { useConfig } from "./hooks/useConfig";

function App() {
  const config = useConfig();
  const [lang, setLang] = useState("en");

  if (!config) return <div>Loading...</div>;

  return (
    <div>
      {/* 🌍 Language Switch */}
      <div style={{ textAlign: "right", padding: "10px" }}>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("hi")} style={{ marginLeft: "10px" }}>
          HI
        </button>
      </div>

      {/* 👇 pass lang */}
      <AppRenderer config={config} lang={lang} />
    </div>
  );
}

export default App;