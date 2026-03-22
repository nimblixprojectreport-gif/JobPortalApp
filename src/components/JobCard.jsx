import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      margin: "15px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ color: "#333" }}>{job.title}</h3>
      <p><b>Company:</b> {job.company}</p>
      <p><b>Location:</b> {job.location}</p>

      <Link to={`/jobs/${job.id}`}>
        <button style={{
          marginTop: "10px",
          padding: "8px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;