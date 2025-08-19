import { useState } from "react";
import "./login.css";

function Login() {
  const [userName, setName] = useState("");
  const [passwd, setPasswd] = useState("");

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

export default Login;