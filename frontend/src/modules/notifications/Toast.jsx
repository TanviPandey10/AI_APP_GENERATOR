import { useState } from "react";

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      background: "#4f46e5",
      color: "white",
      padding: "10px 20px",
      borderRadius: "8px"
    }}>
      {message}
    </div>
  );
}