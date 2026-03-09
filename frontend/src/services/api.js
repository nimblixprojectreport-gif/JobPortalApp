const API_BASE = "http://127.0.0.1:8000/api";
const BASE_URL = "http://127.0.0.1:8000";

/* ---------------- TOKEN ---------------- */

export const getToken = () => {
  return localStorage.getItem("access_token") || "";
};

/* ---------------- HEADERS ---------------- */

export const authHeaders = () => {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

/* ---------------- RESPONSE HANDLER ---------------- */

const handleResponse = async (response) => {
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "API request failed");
  }

  return response.json();
};

/* ---------------- API METHODS ---------------- */

export const api = {
  get: async (path) => {
    const response = await fetch(`${API_BASE}${path}`, {
      method: "GET",
      headers: authHeaders(),
    });

    return handleResponse(response);
  },

  post: async (path, body) => {
    const response = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify(body),
    });

    return handleResponse(response);
  },

  put: async (path, body) => {
    const response = await fetch(`${API_BASE}${path}`, {
      method: "PUT",
      headers: authHeaders(),
      body: JSON.stringify(body),
    });

    return handleResponse(response);
  },

  delete: async (path) => {
    const response = await fetch(`${API_BASE}${path}`, {
      method: "DELETE",
      headers: authHeaders(),
    });

    return handleResponse(response);
  },
};

/* ---------------- RESUME DOWNLOAD ---------------- */

export const downloadResume = async (fileUrl) => {
  const token = getToken();

  const response = await fetch(`${BASE_URL}${fileUrl}`, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "resume";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

export default API_BASE;