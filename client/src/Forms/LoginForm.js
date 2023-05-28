import React, { useState } from "react";
const LoginForm = ({ triggerRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here, such as sending the email and password to a server for authentication

    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {
        <div>
          {" "}
          <h1>Hello Sajid welcome to Login </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">Login</button>
            <button type="button" onClick={triggerRegister}>
              Register{" "}
            </button>
          </form>{" "}
        </div>
      }
    </>
  );
};

export default LoginForm;
