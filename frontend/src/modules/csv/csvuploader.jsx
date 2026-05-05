 import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { createRecord } from "../../services/dynamicApi";

export default function CSVUploader({ entity }) {
  const { addData } = useContext(AppContext);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const text = await file.text();

    const rows = text.split("\n").map(r => r.split(","));
    const headers = rows[0];

    const data = rows.slice(1).map(row => {
      let obj = {};
      headers.forEach((h, i) => {
        obj[h.trim()] = row[i];
      });
      return obj;
    });

    // save each record
    for (let item of data) {
      await createRecord(entity, item);
      addData(entity, item);
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <input type="file" accept=".csv" onChange={handleFile} />
    </div>
  );
}