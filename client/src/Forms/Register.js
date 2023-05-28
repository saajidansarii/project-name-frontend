import React, { useState } from "react";

const Register = ({ triggerLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   //   e.preventDefault();
  //   //   try {
  //   //     const response  = await fetch('/api/register', {
  //   //       method: 'POST',
  //   //       headers: { 'Content-Type': 'application/json' },
  //   //       body: JSON.stringify({ name, email, password }),
  //   //     });
  //   //   } catch (error) {
  //   //     console.log(error)
  //   //   };
  //   // }

  async function handleSubmit(event) {
    debugger;
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.text();
      debugger;
      if (response.ok) {
        console.log("Registration successful");
        // TODO: Redirect to the login page or display a success message
      } else {
        console.error("Registration failed");
        // TODO: Display an error message
      }
    } catch (error) {
      debugger;
    }
  }

  //   if (!response.ok) {
  //     throw new Error('Request failed with status ' + response.status);
  //   }
  //   const responseData = await response.text();
  //     if (responseData) {
  //       const parsedData = JSON.parse(responseData);
  //       console.log("Registration successful");
  //     } else {
  //       console.error("Registration failed");
  //     }
  //   } catch (error) {
  //     console.log("error")
  //   }
  // };

  return (
    <>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                // debugger
                setEmail(e.target.value);
              }}
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                // debugger;
                setPassword(e.target.value);
              }}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Register</button>
          <button type="button" onClick={() => triggerLogin()}>
            Login{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
