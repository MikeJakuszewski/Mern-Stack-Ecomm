import mongoose from "mongoose";

const connectDB = async (connection) => {
  try {
    const conn = await mongoose.connect(connection);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
