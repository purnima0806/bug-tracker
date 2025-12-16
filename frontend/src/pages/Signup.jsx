import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:5001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      navigate("/login");
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0d0d0d]">

      <div className="card-dark w-full max-w-md">
        <h1 className="page-title">Create an Account</h1>

        <p className="text-center text-gray-400 mb-6">
          Sign up to start tracking bugs effortlessly.
        </p>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        {/* NAME */}
        <div className="mb-4">
          <label className="input-label">Full Name</label>
          <input
            type="text"
            className="input-dark"
            placeholder="Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        <button onClick={handleSignup} className="btn-red w-full">
          Sign Up
        </button>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?
          <Link to="/login" className="text-red-500 hover:underline ml-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
