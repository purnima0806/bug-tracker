import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0d0d0d]">

      <div className="card-dark w-full max-w-md">
        <h1 className="page-title">Welcome Back</h1>

        <p className="text-center text-gray-400 mb-6">
          Log in to continue managing bugs in your project.
        </p>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        {/* EMAIL */}
        <div className="mb-4">
          <label className="input-label">Email</label>
          <input
            type="email"
            className="input-dark"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="input-label">Password</label>
          <input
            type="password"
            className="input-dark"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* LOGIN BUTTON */}
        <button onClick={handleLogin} className="btn-red w-full">
          Log In
        </button>

        <p className="text-center text-gray-400 mt-4">
          Don’t have an account?
          <Link to="/signup" className="text-red-500 hover:underline ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
