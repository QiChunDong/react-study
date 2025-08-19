function AppContent() {
  const [userName, setName] = React.useState("");
  const [passwd, setPasswd] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!userName || !passwd) {
      alert("Please fill all fields！！！");
    }

    console.log("userName", userName, "passwd", passwd);

    setName("");
    setPasswd("");
  }

  return (
    <main>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="input"
            value={userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="input"
            type="password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
        </div>
        <br />
        <button className="btn" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </main>
  );
}

const appEl = document.getElementById("app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
