import { useParams } from "react-router-dom";
import { useState } from "react";
import { applyJob } from "../services/api";

const JobDetails = () => {
  const { id } = useParams();
  const [applied, setApplied] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Python Developer",
      company: "ABC Company",
      location: "Bangalore"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "XYZ Company",
      location: "Hyderabad"
    }
  ];

  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) {
    return <p>Job not found</p>;
  }

  const handleApply = async () => {
    await applyJob(job.id);
    setApplied(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{job.title}</h2>
      <p><b>Company:</b> {job.company}</p>
      <p><b>Location:</b> {job.location}</p>

      <button
        onClick={handleApply}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Apply Now
      </button>

      {applied && (
        <p style={{ color: "green" }}>
          Applied Successfully ✅
        </p>
      )}
    </div>
  );
};

export default JobDetails;