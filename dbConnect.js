import mongoose from "mongoose";

const connection = {};
export default async function Database() {
  if (connection.isConnected) {
    console.log("db is already connnected");
    return;
  }
  try {
    // take URI to env later
    const db = await mongoose.connect(
      //   "mongodb+srv://drzombiee:5555@blogdatabase.w6ibg8n.mongodb.net/?retryWrites=true&w=majority&appName=BlogDatabase"
      "mongodb://localhost:27017/nextDB"
    );

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to the database");
    // Further operations with the database can be placed here
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
}
