 import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const useConfig = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/config`)
      .then((res) => res.json())
      .then((data) => {
        setConfig(data);
      })
      .catch((err) => {
        console.error("Config fetch error:", err);
      });
  }, []);

  return { config };
};