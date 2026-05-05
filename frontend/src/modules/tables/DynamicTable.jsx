import { useContext, useEffect, useState } from "react";
import config from "../../config.json";
import { AppContext } from "../../context/AppContext";
import { getRecords } from "../../services/dynamicApi";

export default function DynamicTable({ entity }) {
  const entityConfig = config.entities.find(e => e.name === entity);

  const { data } = useContext(AppContext);

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ❗ safety check
  if (!entityConfig) {
    return <div>Invalid entity: {entity}</div>;
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        // ✅ backend call
        const res = await getRecords(entity);

        // backend format: { entity, data }
        const formatted = res.map(item => item.data);

        setTableData(formatted);
      } catch (err) {
        console.error(err);

        // ❗ fallback to local state
        setTableData(data[entity] || []);
        setError("Using local data (API failed)");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [entity, data]);

  return (
    <div>
      <h2>{entity} Table</h2>

      {/* 🔄 loading */}
      {loading && <p>Loading...</p>}

      {/* ❗ error */}
      {error && <p style={{ color: "orange" }}>{error}</p>}

      {!loading && (
        <table border="1">
          <thead>
            <tr>
              {entityConfig.fields.map(field => (
                <th key={field.name}>{field.name}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.length === 0 ? (
              <tr>
                <td colSpan={entityConfig.fields.length}>
                  No data available
                </td>
              </tr>
            ) : (
              tableData.map((row, i) => (
                <tr key={i}>
                  {entityConfig.fields.map(field => (
                    <td key={field.name}>
                      {row[field.name] || "-"}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}