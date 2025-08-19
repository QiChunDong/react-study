function AppContent() {
  const [text, setText] = React.useState("");
  return (
    <main>
      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </main>
  );
}

const appEl = document.getElementById("app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
