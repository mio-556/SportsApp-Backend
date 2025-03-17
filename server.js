// Example usingn Express.js
const express = require("express");
const app = express();

// Defining the routes
app.get("/", (request, response) => {
  response.send("<h3>Express.js server.</h3>");
});

// Include route files
const runsRoute = require("./routes/api/runs");

// Use route files
app.use("/runs", runsRoute);

// Specifying the port and listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
