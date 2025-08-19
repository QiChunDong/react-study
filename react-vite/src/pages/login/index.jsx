import { useState } from "react";
import AppInput from "../components/AppInput.jsx";
import AppButton from "../components/AppButton.jsx";
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
        <AppButton className="btn" onClick={handleSubmit}>
          <span style={{ color: "red" }}>Login</span>
        </AppButton>
        <AppButton className="btn" onClick={handleSubmit}>
          <span>Register</span>
        </AppButton>
      </form>
    </main>
  );
}

export default Login;
