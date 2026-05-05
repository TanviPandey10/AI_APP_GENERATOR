  import PageRenderer from "./PageRenderer";

export default function AppRenderer({ config, lang }) {
  if (!config || !config.ui) {
    return <div>No config found</div>;
  }

  return (
    <div className="container">
      <h1> AI APP GENERATOR</h1>

      {config.ui.pages.map((page, index) => (
        <div className="card" key={index}>
          <PageRenderer page={page} lang={lang} />
        </div>
      ))}
    </div>
  );
}