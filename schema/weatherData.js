import mongoose from "mongoose";

const { Schema } = mongoose;

const weatherSchema = new Schema({
  location: String,
  data: Date,
  temp: Number,
  userId: String,
});

const weatherData = mongoose.model("weatherData", weatherSchema);
export default weatherData;
