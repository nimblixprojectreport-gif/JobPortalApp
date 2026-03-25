const BASE_URL = "http://127.0.0.1:8000/api";

// 🔹 Get all jobs
export const getJobs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/jobs/`);

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data = await response.json();
    console.log("API DATA:", data); // 👈 debug
    return data;

  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

// 🔹 Get single job by ID
export const getJobById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/jobs/${id}/`);

    if (!response.ok) {
      throw new Error("Failed to fetch job");
    }

    return await response.json();

  } catch (error) {
    console.error("Error fetching job:", error);
    return null;
  }
};

// 🔹 Apply for a job (optional - future use)
export const applyJob = async (jobId, formData) => {
  try {
    const response = await fetch(`${BASE_URL}/apply/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        job: jobId,
        ...formData,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to apply");
    }

    return await response.json();

  } catch (error) {
    console.error("Error applying job:", error);
  }
};
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8001/api';

const api = {
  // Auth endpoints
  login: (credentials) => axios.post(`${API_BASE_URL}/users/login/`, credentials),
  logout: () => axios.post(`${API_BASE_URL}/users/logout/`),
  register: (userData) => axios.post(`${API_BASE_URL}/users/register/`, userData),
  
  // Company endpoints
  registerCompany: (companyData) => axios.post(`${API_BASE_URL}/companies/register/`, companyData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  }),
  getCompany: (id) => axios.get(`${API_BASE_URL}/companies/${id}/`),
  updateCompany: (id, data) => axios.put(`${API_BASE_URL}/companies/${id}/`, data),
  
  // Job endpoints
  getJobs: () => axios.get(`${API_BASE_URL}/jobs/`),
  createJob: (jobData) => axios.post(`${API_BASE_URL}/jobs/`, jobData),
  
  // Application endpoints
  getApplications: () => axios.get(`${API_BASE_URL}/applications/`),
  createApplication: (appData) => axios.post(`${API_BASE_URL}/applications/`, appData),
};

export default api;
