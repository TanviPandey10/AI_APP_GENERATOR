 import { useLocalization } from "../../hooks/useLocalization";

export default function FieldRenderer({ field, value, onChange, lang }) {
  const labels = useLocalization(lang);

  const label = labels[field.name] || field.name;

  switch (field.type) {
    case "text":
      return (
        <input
          type="text"
          placeholder={label}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      );

    case "number":
      return (
        <input
          type="number"
          placeholder={label}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      );

    default:
      return <div>Unsupported field</div>;
  }
}