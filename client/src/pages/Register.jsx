import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/auth/register`, inputs);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" required id="username" name="username" placeholder="username" onChange={handleChange} />
        <input type="email" required id="email" name="email" placeholder="email" onChange={handleChange} />
        <input type="password" required id="password" name="password" placeholder="password" onChange={handleChange} />
        <button>Register</button>
        <p className="error">This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}
