 const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) throw new Error("Login failed");
  return response.json(); // Isme token aur user data hona chahiye
};