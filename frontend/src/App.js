jobprotelitem
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CandidateResumes from "./components/CandidateResumes";

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Jobs from './pages/Jobs';
import SavedJobs from './pages/SavedJobs';
import ResumeUpload from './pages/ResumeUpload';
jobportelteam

/* ---------------- HOME PAGE ---------------- */

function Home() {
  return (
jobprotelitem
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

    <nav style={{
      background: '#0d0d0d', borderBottom: '1px solid #1a1a1a',
      padding: '12px 24px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', fontFamily: "'Syne', sans-serif"
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          width: '10px', height: '10px', background: '#ff6b35',
          borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 12px #ff6b35'
        }} />
        <span style={{
          color: '#fff', fontWeight: '800', fontSize: '16px',
          textTransform: 'uppercase', letterSpacing: '.05em'
        }}>JobPortal</span>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        {/* Jobs */}
        <Link to="/jobs" style={{
          padding: '8px 18px', borderRadius: '8px', textDecoration: 'none',
          fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: '700',
          background: location.pathname === '/jobs' ? '#ff6b35' : 'transparent',
          color: location.pathname === '/jobs' ? '#fff' : '#555',
          border: '1px solid',
          borderColor: location.pathname === '/jobs' ? '#ff6b35' : '#222',
          transition: 'all .15s'
        }}>Jobs</Link>

        {/* Saved Jobs */}
        <Link to="/saved-jobs" style={{
          padding: '8px 18px', borderRadius: '8px', textDecoration: 'none',
          fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: '700',
          background: location.pathname === '/saved-jobs' ? '#ff6b35' : 'transparent',
          color: location.pathname === '/saved-jobs' ? '#fff' : '#555',
          border: '1px solid',
          borderColor: location.pathname === '/saved-jobs' ? '#ff6b35' : '#222',
          transition: 'all .15s'
        }}>♥ Saved</Link>

        {/* Resumes ← NEW */}
        <Link to="/resumes" style={{
          padding: '8px 18px', borderRadius: '8px', textDecoration: 'none',
          fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: '700',
          background: location.pathname === '/resumes' ? '#ff6b35' : 'transparent',
          color: location.pathname === '/resumes' ? '#fff' : '#555',
          border: '1px solid',
          borderColor: location.pathname === '/resumes' ? '#ff6b35' : '#222',
          transition: 'all .15s'
        }}>📄 Resumes</Link>

        {/* Logout */}
        <button
          onClick={() => { localStorage.clear(); window.location.href = '/'; }}
          style={{
            padding: '8px 18px', borderRadius: '8px', border: '1px solid #222',
            background: 'transparent', color: '#555', cursor: 'pointer',
            fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: '700'
          }}
        >Logout</button>
jobportelteam
      </div>
    </div>
  );
}

/* ---------------- MAIN APP ---------------- */

function App() {
  return (
    <Router>
jobprotelitem
      <div style={styles.appWrapper}>
        <Navbar />

        <div style={styles.page}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/candidates/resumes" element={<CandidateResumes />} />
          </Routes>
        </div>
      </div>

      <Navbar />
      <Routes>
        <Route path="/"           element={<Login />} />
        <Route path="/jobs"       element={<PrivateRoute><Jobs /></PrivateRoute>} />
        <Route path="/saved-jobs" element={<PrivateRoute><SavedJobs /></PrivateRoute>} />
        <Route path="/resumes"    element={<PrivateRoute><ResumeUpload /></PrivateRoute>} />
      </Routes>
jobportelteam
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