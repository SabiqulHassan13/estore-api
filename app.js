const express = require("express");

const webRoutes = require("./routes/web-routes");
const apiRoutes = require("./routes/api-routes");

const app = express();

// route list
app.use("/", webRoutes);
app.use("/api", apiRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
