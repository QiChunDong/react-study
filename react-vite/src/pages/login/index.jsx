import { useState } from "react";
import AppInput from "../components/AppInput/index.jsx";
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
          <AppInput
            className={userNameClass}
            value={userName}
            setState={setName}
          />
        </div>
        <div>
          <AppInput
            type="password"
            className={passwdClass}
            value={passwd}
            setState={setPasswd}
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
