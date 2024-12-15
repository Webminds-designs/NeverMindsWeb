import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://siriwardhanarumesh:nevermindsDev123@cluster0.vrcvz.mongodb.net/neverMinds?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true, // Not required in Mongoose 6+, included for backward compatibility
        useUnifiedTopology: true, // Not required in Mongoose 6+, included for backward compatibility
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
