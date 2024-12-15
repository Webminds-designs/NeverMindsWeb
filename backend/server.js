import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";

dotenv.config(); // Load environment variables

// Get the port from .env or default to 5000
const PORT = process.env.PORT || 5001;

// Connect to the database
connectDB();

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown handling
process.on("SIGINT", () => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("Server shut down gracefully");
    process.exit(0);
  });
});
