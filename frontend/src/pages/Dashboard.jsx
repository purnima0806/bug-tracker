import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBugs = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://127.0.0.1:5001/api/bugs", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    setBugs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-6 py-8">

      {/* NAVBAR */}
      <div className="navbar mb-10">
        <h1 className="text-xl font-bold text-red-500">BugTracker</h1>

        <div>
          <button className="nav-btn" onClick={() => navigate("/home")}>Home</button>
          <button className="nav-btn" onClick={() => navigate("/create")}>Add Bug</button>
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

      {/* TITLE */}
      <h2 className="page-title">Bug Dashboard</h2>

      {loading ? (
        <p className="text-center text-gray-400 text-lg mt-10">Loading bugs...</p>
      ) : bugs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-10">
          No bugs reported yet. Click <span className="text-red-500 font-semibold">Add Bug</span> to create your first report.
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6 mt-8">

          {bugs.map((bug) => (
            <div key={bug._id} className="card-dark">

              {/* Bug Title */}
              <h3 className="text-2xl font-semibold text-white mb-1">{bug.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mb-4">{bug.description}</p>

              {/* Priority + Reporter */}
              <div className="flex justify-between items-center">

                {/* Priority Badge */}
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold
                    ${bug.priority === "critical" ? "bg-red-700 text-white"
                      : bug.priority === "medium" ? "bg-yellow-600 text-white"
                      : "bg-green-700 text-white"}`}
                >
                  {bug.priority.charAt(0).toUpperCase() + bug.priority.slice(1)}
                </span>

                {/* Reporter */}
                <span className="text-gray-500 text-sm">
                  Reported by:{" "}
                  <span className="text-gray-300">{bug.createdBy?.name}</span>
                </span>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        Tracking issues made easier — Built by <span className="text-red-500">Sunshine</span>
      </footer>

    </div>
  );
}
