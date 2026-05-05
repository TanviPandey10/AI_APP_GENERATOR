 import { useState, useContext } from "react";
import FieldRenderer from "./FieldRenderer";
import config from "../../config.json";
import { AppContext } from "../../context/AppContext";
import { createRecord } from "../../services/dynamicApi";
import CSVUploader from "../csv/csvuploader";
import { useLocalization } from "../../hooks/useLocalization";

export default function DynamicForm({ entity, lang }) {
  const entityConfig = config.entities.find(e => e.name === entity);
  const labels = useLocalization(lang);

  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const { addData } = useContext(AppContext);

  if (!entityConfig) {
    return <div>Invalid entity: {entity}</div>;
  }

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    for (let field of entityConfig.fields) {
      if (field.required && !formData[field.name]) {
        setError(`${field.name} is required`);
        return;
      }
    }

    setError("");
    setLoading(true);

    try {
      await createRecord(entity, formData);
      addData(entity, formData);

      setToast("Data saved successfully!");
      setTimeout(() => setToast(""), 2000);

      setFormData({});
    } catch (err) {
      console.error(err);
      setError("Failed to save data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{entity} Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {toast && (
        <div style={{
          background: "#4f46e5",
          color: "white",
          padding: "8px 12px",
          borderRadius: "6px",
          marginBottom: "10px"
        }}>
          {toast}
        </div>
      )}

      <div style={{ marginBottom: "10px" }}>
        {entityConfig.fields.map(field => (
          <FieldRenderer
            key={field.name}
            field={field}
            value={formData[field.name] || ""}
            onChange={handleChange}
            lang={lang}   // 🔥 IMPORTANT
          />
        ))}
      </div>

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Saving..." : (labels.submit || "Submit")}
      </button>

      <CSVUploader entity={entity} />
    </div>
  );
}