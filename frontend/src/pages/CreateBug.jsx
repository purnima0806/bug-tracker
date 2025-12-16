import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBug() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://127.0.0.1:5001/api/bugs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, priority }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Bug reported successfully!");
      setTitle("");
      setDescription("");
      setPriority("low");

      setTimeout(() => {
        navigate("/bugs");
      }, 1500);
    } else {
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-6 py-8">

      {/* NAVBAR */}
      <div className="navbar mb-10">
        <h1 className="text-xl font-bold text-red-500">BugTracker</h1>

        <div>
          <button className="nav-btn" onClick={() => navigate("/home")}>Home</button>
          <button className="nav-btn" onClick={() => navigate("/bugs")}>Dashboard</button>
          <button
            className="nav-btn"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* PAGE TITLE */}
      <h2 className="page-title">Report a New Bug</h2>

      <div className="max-w-xl mx-auto card-dark">

        {/* SUCCESS/ERROR MESSAGE */}
        {message && (
          <p className="text-center text-red-400 mb-4 font-semibold">{message}</p>
        )}

        {/* TITLE */}
        <label className="input-label">Bug Title</label>
        <input
          type="text"
          className="input-dark"
          placeholder="e.g. Login button not working"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* DESCRIPTION */}
        <label className="input-label mt-4">Description</label>
        <textarea
          className="input-dark"
          placeholder="Describe the issue in detail..."
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* PRIORITY */}
        <label className="input-label mt-4">Priority</label>
        <select
          className="input-dark cursor-pointer"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="critical">Critical</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        {/* SUBMIT BUTTON */}
        <button
          onClick={handleSubmit}
          className="btn-red w-full mt-6 py-3 rounded-xl text-lg"
        >
          Submit Bug
        </button>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        Report issues easily — Built by <span className="text-red-500">Sunshine</span>
      </footer>
    </div>
  );
}
