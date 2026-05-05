 import { registry } from "./ComponentRegistry";

export default function PageRenderer({ page, lang }) {
  const Component = registry[page.type];

  if (!Component) {
    return <div>Unsupported Component: {page.type}</div>;
  }

  return <Component entity={page.entity} lang={lang} />;
}