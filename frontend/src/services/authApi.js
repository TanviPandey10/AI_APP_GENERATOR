 const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const loginUser = async (email, password) => {
  // Console log lagayein taaki pata chale request kahan ja rahi hai
  console.log("Requesting to:", `${API_URL}/api/login`);

  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  // Agar 404 ya HTML aata hai toh ye error handle karega
  if (!response.headers.get("content-type")?.includes("application/json")) {
    const text = await response.text();
    console.error("Server returned non-JSON response:", text);
    throw new Error("Server error: Check if backend is running on port 5000");
  }

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Login failed");
  return data;
};