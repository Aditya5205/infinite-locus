import axios from "axios";
import express from "express";
import "dotenv/config";
import weatherRoute from "./routes/weather.js";

const app = express();
const PORT = 8000;

app.use(express.static("public"));

import dbConnect from "./dbConnect.js"; // connect to database
app.use("/data", weatherRoute); // using weather route

app.post("/result", async (req, res) => {
  await dbConnect();
  const location = req.query.location;

  const path = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=yes`;

  let apiResponse = {};
  try {
    await axios.get(path).then((result) => {
      apiResponse = result.data;
    });
  } catch (error) {
    console.log(error);
  }

  res.send(apiResponse);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:8000/`);
});
