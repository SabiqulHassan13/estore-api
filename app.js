const express = require("express");

const apiRoutes = require("./routes/api-routes");

const app = express();

// middleware list
app.use(express.json());

// route list
app.use("/api", apiRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
