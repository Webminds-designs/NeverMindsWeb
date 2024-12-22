import request from "supertest";
import app from "../app.js"; // Your main Express app
import User from "../Model/User.js";
import connectDB from "../config/dbConfig.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Set timeout to allow database operations to complete
jest.setTimeout(10000);

beforeAll(async () => {
  process.env.NODE_ENV = "test"; // Set the environment to test
  await connectDB(); // Connect to the test database
});

beforeEach(async () => {
  // Clean the database before each test
  await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
  // Cleanup database and close connection after tests
  try {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    console.log("Test database connection closed.");
  } catch (error) {
    console.error("Error during database cleanup:", error.message);
  }
});

describe("Auth Controller Tests", () => {
  describe("GET /test", () => {
    it("should return a test message", async () => {
      const response = await request(app).get("/api/v1/auth/test");
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Auth controller works!");
    });
  });

  describe("POST /signup", () => {
    it("should register a new user", async () => {
      const response = await request(app).post("/api/v1/auth/signup").send({
        name: "John Doe",
        email: "john@example.com",
        password: "123456",
        role: "student",
      });
      expect(response.statusCode).toBe(201);
      expect(response.body.message).toBe("User registered successfully!");
      expect(response.body.user.email).toBe("john@example.com");
    });

    it("should not register a user with an existing email", async () => {
      await User.create({
        name: "John Doe",
        email: "john@example.com",
        password: "123456",
        role: "student",
      });

      const response = await request(app).post("/api/v1/auth/signup").send({
        name: "Jane Doe",
        email: "john@example.com",
        password: "abcdef",
        role: "admin",
      });
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe("Email is already in use.");
    });
  });

  describe("POST /login", () => {
    beforeEach(async () => {
      // Create a test user for login tests
      await User.create({
        name: "John Doe",
        email: "login@example.com",
        password: "123456", // Ensure this is hashed in your actual code
        role: "student",
      });
    });

    it("should log in an existing user", async () => {
      const response = await request(app).post("/api/v1/auth/login").send({
        email: "login@example.com",
        password: "123456",
      });
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Login successful!");
      expect(response.body.token).toBeDefined();
    });

    it("should not log in with invalid credentials", async () => {
      const response = await request(app).post("/api/v1/auth/login").send({
        email: "login@example.com",
        password: "wrongpassword",
      });
      expect(response.statusCode).toBe(401);
      expect(response.body.message).toBe("Invalid email or password.");
    });
  });
});
