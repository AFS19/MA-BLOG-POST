import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input type="text" required id="username" placeholder="username" />
        <input type="email" required id="email" placeholder="email" />
        <input type="password" required id="password" placeholder="password" />
        <button>Register</button>
        <p className="error">This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}
