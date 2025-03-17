import express from "express";
import fs from "fs/promises";

const router = express.Router();

// runs/
// gets all the runs
router.get("/", async (request, response) => {
  try {
    const runsData = await fs.readFile(
      "./models/json-data/runsData.json",
      "utf8"
    );
    const parsedData = JSON.parse(runsData);
    response.json(parsedData);
  } catch (err) {
    response.status(500).json({ err: "Error reading the JSON data file" });
  }
});

export default router;
