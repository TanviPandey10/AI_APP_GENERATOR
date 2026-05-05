 import app from "./app.js";
import { connectDB } from "./db/connectDB.js";

const PORT = 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});