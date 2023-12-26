import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" required id="username" placeholder="username" />
        <input type="password" required id="password" placeholder="password" />
        <button>Login</button>
        <p className="error">This is an error!</p>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}
