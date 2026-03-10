const API_BASE = 'http://127.0.0.1:8000/api';

export const getToken = () => localStorage.getItem('access_token') || '';

export const authHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
});

export const api = {
  get: (path) =>
    fetch(`${API_BASE}${path}`, { headers: authHeaders() }).then((r) => r.json()),
  post: (path, body) =>
    fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(body),
    }).then((r) => r.json()),
};

export default API_BASE;
