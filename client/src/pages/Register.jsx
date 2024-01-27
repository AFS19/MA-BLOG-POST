import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setInputs((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleChange}>
        <input type="text" required id="username" name="username" placeholder="username" />
        <input type="email" required id="email" name="email" placeholder="email" />
        <input type="password" required id="password" name="password" placeholder="password" />
        <button>Register</button>
        <p className="error">This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}
