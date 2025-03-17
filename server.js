// Example usingn Express.js
import express from "express";
import runsRoute from "./routes/api/runs.js";
const app = express();

// Defining the routes
app.get("/", (request, response) => {
  response.send("<h3>Express.js server.</h3>");
});

// Use route files
app.use("/runs", runsRoute);

// Specifying the port and listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
