 export default function FieldRenderer({
  field,
  value,
  onChange,
  lang,
}) {
  const label =
    typeof field.label === "object"
      ? field.label[lang]
      : field.label;

  switch (field.type) {
    case "text":
    case "email":
      return (
        <div style={{ marginBottom: "10px" }}>
          <input
            type={field.type}
            placeholder={label}
            value={value}
            onChange={(e) =>
              onChange(field.name, e.target.value)
            }
            style={{
              padding: "10px",
              width: "220px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      );

    default:
      return <div>Unsupported field</div>;
  }
}