 import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useConfig } from "../../hooks/useConfig";

export default function DynamicTable({ entity }) {
  const { config } = useConfig();
  const { appData } = useContext(AppContext);

  if (!config) return <div>Loading...</div>;

  // ✅ find page config
  const entityConfig = config.ui?.pages?.find(
    (p) => p.entity === entity
  );

  if (!entityConfig) {
    return <div>Invalid entity: {entity}</div>;
  }

  const fields =
    entityConfig.sections?.[0]?.fields || [];

  const records = appData?.[entity] || [];

  return (
    <div style={{ marginTop: "20px" }}>
      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            {fields.map((field) => (
              <th key={field.name}>
                {typeof field.label === "object"
                  ? field.label.en
                  : field.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {records.length > 0 ? (
            records.map((record, index) => (
              <tr key={index}>
                {fields.map((field) => (
                  <td key={field.name}>
                    {record[field.name]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={fields.length}>
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}