import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CandidateResumes from "./components/CandidateResumes";

/* ---------------- HOME PAGE ---------------- */

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Job Portal Dashboard</h1>
      <p style={styles.subtitle}>Manage candidates and download resumes</p>

      <div style={styles.cardContainer}>
        <Link to="/candidates/resumes" style={styles.card}>
          📄 Candidate Resumes
        </Link>
      </div>
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */

function Navbar() {
  return (
    <div style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        Job Portal
      </Link>

      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>
          Home
        </Link>

        <Link to="/candidates/resumes" style={styles.link}>
          Resumes
        </Link>
      </div>
    </div>
  );
}

/* ---------------- MAIN APP ---------------- */

function App() {
  return (
    <Router>
      <div style={styles.appWrapper}>
        <Navbar />

        <div style={styles.page}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/candidates/resumes" element={<CandidateResumes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

/* ---------------- STYLES ---------------- */

const styles = {
  appWrapper: {
    fontFamily: "Segoe UI, sans-serif",
    minHeight: "100vh",
    background: "#f8fafc",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#6366f1",
    color: "white",
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },

  page: {
    maxWidth: "1000px",
    margin: "0 auto",
  },

  container: {
    padding: "40px",
  },

  title: {
    color: "#6366f1",
    fontSize: "32px",
  },

  subtitle: {
    color: "#64748b",
    marginTop: "10px",
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
  },

  card: {
    padding: "20px 30px",
    background: "#eef2ff",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#4338ca",
    fontWeight: "600",
    fontSize: "16px",
    transition: "0.2s",
  },
};