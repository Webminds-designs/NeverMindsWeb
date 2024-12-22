import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  // Select the correct database URI based on the environment
  const dbURI =
    process.env.NODE_ENV === "test"
      ? process.env.TEST_DB_URL
      : process.env.MONDO_DB_URI;

  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB: ${dbURI}`);
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
};

export default connectDB;
