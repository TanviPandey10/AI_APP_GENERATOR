 import { useState, useContext } from "react";
import FieldRenderer from "./FieldRenderer";
import { AppContext } from "../../context/AppContext";
import { createRecord } from "../../services/dynamicApi";
import CSVUploader from "../csv/CSVUploader";
import { useLocalization } from "../../hooks/useLocalization";
import { useConfig } from "../../hooks/useConfig";

export default function DynamicForm({ entity, lang }) {
  const { config } = useConfig();
  const labels = useLocalization(lang);

  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const { addData } = useContext(AppContext);

  // wait until config loads
  if (!config) return <div>Loading...</div>;

  // get page config
  const entityConfig = config.ui?.pages?.find(
    (p) => p.entity === entity
  );

  if (!entityConfig) {
    return <div>Invalid entity: {entity}</div>;
  }

  // get fields safely
  const fields = entityConfig.sections?.[0]?.fields || [];

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    for (let field of fields) {
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
      {error && <p style={{ color: "red" }}>{error}</p>}

      {toast && (
        <div
          style={{
            background: "#4f46e5",
            color: "white",
            padding: "8px 12px",
            borderRadius: "6px",
            marginBottom: "10px",
          }}
        >
          {toast}
        </div>
      )}

      <div style={{ marginBottom: "10px" }}>
        {fields.map((field) => (
          <FieldRenderer
            key={field.name}
            field={field}
            value={formData[field.name] || ""}
            onChange={handleChange}
            lang={lang}
          />
        ))}
      </div>

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Saving..." : labels.submit || "Submit"}
      </button>

      <CSVUploader entity={entity} />
    </div>
  );
}