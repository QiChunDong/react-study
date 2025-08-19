function AppContent() {
  const [userName, setName] = React.useState("");
  const [passwd, setPasswd] = React.useState("");

  const userNameClass = userName.length > 5 ? "input" : "input error";
  const passwdClass = passwd.length > 5 ? "input" : "input error";

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
            className={userNameClass}
            value={userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className={passwdClass}
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
