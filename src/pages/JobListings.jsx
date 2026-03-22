import { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import JobCard from "../components/JobCard";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      console.log("DATA RECEIVED:", data); // 👈 MUST ADD
      setJobs(data);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>

      {jobs.length === 0 ? (
        <p>No Jobs Found</p>
      ) : (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      )}
    </div>
  );
};

export default JobListings;