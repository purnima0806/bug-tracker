import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-6 py-10">

      {/* NAVBAR */}
      <div className="navbar">
        <h1 className="text-xl font-bold text-red-500 tracking-wide">
          BugTracker
        </h1>

        <div>
          <button
            className="nav-btn"
            onClick={() => navigate("/bugs")}
          >
            Dashboard
          </button>

          <button
            className="nav-btn"
            onClick={() => navigate("/create")}
          >
            New Bug
          </button>

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

      {/* HERO SECTION */}
      <section className="text-center mt-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Track. Manage. Resolve.
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Welcome to <span className="text-red-500 font-semibold">BugTracker</span> —  
          a clean and powerful tool to report, view, and manage software bugs  
          with ease. Organized, minimal, and crafted with a premium user experience.
        </p>

        <div className="mt-10 flex justify-center gap-8">
  <button
    onClick={() => navigate("/bugs")}
    className="btn-red px-8 py-3 text-lg"
  >
    View Bug Dashboard
  </button>

  <button
    onClick={() => navigate("/create")}
    className="btn-red px-8 py-3 text-lg"
  >
    Report New Bug
  </button>
</div>

      </section>

      {/* FEATURES */}
      <section className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why BugTracker?</h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          <div className="card-dark">
            <h3 className="text-xl font-semibold mb-2">🐞 What Is BugTracker?</h3>
            <p className="text-gray-400">
            BugTracker is a simple and efficient web application designed to help users report issues, assign priorities, and track bugs in one organized space.
It keeps your work clean, structured, and easy to manage whether you're working alone or in a team.            </p>
          </div>

          <div className="card-dark">
            <h3 className="text-xl font-semibold mb-2">🔐 How Bug Reporting Works?</h3>
            <p className="text-gray-400">
            Creating a bug report is quick and effortless just enter the issue title, describe the problem, choose a priority level, and submit.
Your report instantly appears in the dashboard, making it easier to track and resolve issues without confusion.            </p>
          </div>

          <div className="card-dark">
            <h3 className="text-xl font-semibold mb-2">📊 Clean & Organized Dashboard</h3>
            <p className="text-gray-400">
            The dashboard neatly displays all reported bugs in one place, showing their title, description, priority, and creator.
It helps you quickly understand what needs attention, track progress, and manage issues without getting overwhelmed.            </p>
          </div>

          <div className="card-dark">
            <h3 className="text-xl font-semibold mb-2">🌍 Why This Project Matters</h3>
            <p className="text-gray-400">
            BugTracker solves a real problem faced in software development keeping track of issues in an organized way.
It helps teams work smoothly, prevents mistakes from being missed, and improves the quality of any project by ensuring bugs are properly recorded and resolved.            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        Built with ❤️ by <span className="text-red-500 font-semibold">Purnima Dwivedi </span>  
         for college project & resume.
      </footer>
    </div>
  );
}
