// src/config/api.js

export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://avfinancial.com/api"
    : "http://localhost:4000/api"; // your backend local URL

export const API = {
  AUTH: `${API_BASE_URL}/auth`,
  APPLICATIONS: `${API_BASE_URL}/applications`,
  NEWSLETTER: `${API_BASE_URL}/newsletter`,
  CONTACT: `${API_BASE_URL}/contact`,
};
