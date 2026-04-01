import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    let validationErrors = {};

    if (name === "") {
      validationErrors.name = "Name is required";
    }

    if (email === "") {
      validationErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      validationErrors.email = "Invalid email format";
    }

    if (password === "") {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form Submitted Successfully!");

      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div style={{width:"300px", margin:"auto", marginTop:"50px"}}>

      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label><br/>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label><br/>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label><br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
        </div>

        <br/>

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default App;