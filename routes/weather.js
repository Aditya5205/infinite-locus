import { Router } from "express";
import weatherData from "../schema/weatherData.js";

const router = Router();

router.get("/", async (_, res) => {
  try {
    const data = await weatherData.find({});
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in fetching data from the database" });
  }
});

router.post("/", async (req, res) => {
  const { userId, temp, location } = req.body;
  try {
    const newData = new weatherData({
      userId,
      temp,
      location,
    });
    await newData.save();
    res.status(201).send("data added");
  } catch (error) {
    res.status(500).json({ message: "Error in adding data to the database" });
  }
});

export default router;
