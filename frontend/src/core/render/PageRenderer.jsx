 import { registry } from "./ComponentRegistry";

export default function PageRenderer({ page, lang }) {
  const type = page.type || page.sections?.[0]?.type;

  const Component = registry[type];

  if (!Component) {
    return <div>Unsupported Component: {type}</div>;
  }

  return (
    <div>
      <h2 style={{ marginBottom: "15px" }}>
        {typeof page.title === "object"
          ? page.title[lang]
          : page.title}
      </h2>

      <Component
        entity={page.entity}
        page={page}
        lang={lang}
      />
    </div>
  );
}