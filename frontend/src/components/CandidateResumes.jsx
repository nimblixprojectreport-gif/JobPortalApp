import { useState, useEffect } from "react";

const API_BASE = "http://127.0.0.1:8000/api";
const BASE_URL = "http://127.0.0.1:8000";

/* ---------------- STATUS BADGE ---------------- */

function StatusBadge({ status }) {
  const map = {
    applied: { bg: "#e0f2fe", color: "#0369a1", label: "Applied" },
    shortlisted: { bg: "#dcfce7", color: "#15803d", label: "Shortlisted" },
    rejected: { bg: "#fee2e2", color: "#b91c1c", label: "Rejected" },
    hired: { bg: "#f3e8ff", color: "#7e22ce", label: "Hired" },
    interview: { bg: "#fef9c3", color: "#92400e", label: "Interview" },
  };

  const s = map[status?.toLowerCase()] || {
    bg: "#f1f5f9",
    color: "#475569",
    label: status || "Unknown",
  };

  return (
    <span
      style={{
        background: s.bg,
        color: s.color,
        padding: "3px 10px",
        borderRadius: 99,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {s.label}
    </span>
  );
}

/* ---------------- CANDIDATE CARD ---------------- */

function CandidateCard({ candidate, onDownload, downloading }) {
  const fullName =
    candidate.full_name ||
    `${candidate.first_name || ""} ${candidate.last_name || ""}`.trim() ||
    "Unknown Candidate";

  const email = candidate.email || "—";
  const phone = candidate.phone || "—";

  const hasResume = Boolean(candidate.resume);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e8edf3",
        borderRadius: 14,
        padding: "20px",
        display: "flex",
        alignItems: "center",
        gap: 20,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 45,
          height: 45,
          borderRadius: "50%",
          background: "#6366f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
        }}
      >
        {fullName.charAt(0)}
      </div>

      {/* Candidate Info */}
      <div style={{ flex: 1 }}>
        <strong>{fullName}</strong>

        <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>
          ✉️ {email} &nbsp;&nbsp; 📞 {phone}
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={() => onDownload(candidate)}
        disabled={!hasResume || downloading === candidate.id}
        style={{
          padding: "8px 16px",
          borderRadius: 8,
          border: "none",
          background: hasResume ? "#6366f1" : "#e2e8f0",
          color: hasResume ? "#fff" : "#94a3b8",
          cursor: hasResume ? "pointer" : "not-allowed",
          fontWeight: 600,
        }}
      >
        {downloading === candidate.id ? "Downloading..." : "Download Resume"}
      </button>
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function CandidateResumes() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCandidates();
  }, []);

  /* ---------------- FETCH DATA ---------------- */

  const fetchCandidates = async () => {
    try {
      setLoading(true);
      setError("");

      /* GET CANDIDATES */
      const profilesRes = await fetch(`${API_BASE}/candidates/`);
      if (!profilesRes.ok) throw new Error("Failed to fetch candidates");

      let profiles = await profilesRes.json();
      profiles = profiles.results || profiles;

      /* GET RESUMES */
      const resumesRes = await fetch(`${API_BASE}/resumes/`);
      let resumes = resumesRes.ok ? await resumesRes.json() : [];
      resumes = resumes.results || resumes;

      /* MERGE DATA */
      const merged = profiles.map((candidate) => {
        const resume = resumes.find((r) => r.candidate === candidate.id);

        let resumeUrl = null;

        if (resume && resume.file) {
          if (resume.file.startsWith("http")) {
            resumeUrl = resume.file;
          } else {
            resumeUrl = `${BASE_URL}${resume.file}`;
          }
        }

        return {
          ...candidate,
          resume: resumeUrl,
        };
      });

      setCandidates(merged);
    } catch (err) {
      console.error(err);
      setError("Failed to load candidates");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- DOWNLOAD RESUME ---------------- */

  const handleDownload = async (candidate) => {
    if (!candidate.resume) {
      alert("No resume available");
      return;
    }

    try {
      setDownloading(candidate.id);

      const response = await fetch(candidate.resume);

      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;

      const name =
        (candidate.full_name || "candidate")
          .replace(/\s+/g, "_")
          .toLowerCase();

      const ext =
        candidate.resume.split(".").pop()?.split("?")[0] || "pdf";

      a.download = `${name}_resume.${ext}`;

      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Download failed");
    } finally {
      setDownloading(null);
    }
  };

  /* ---------------- UI ---------------- */

  if (loading) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Loading candidates...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: 40 }}>
        <h2>{error}</h2>
        <button onClick={fetchCandidates}>Retry</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 40, maxWidth: 800, margin: "auto" }}>
      <h1 style={{ marginBottom: 20 }}>Candidate Resumes</h1>

      {candidates.length === 0 ? (
        <p>No candidates found.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onDownload={handleDownload}
              downloading={downloading}
            />
          ))}
        </div>
      )}
    </div>
  );
}