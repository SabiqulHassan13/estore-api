const express = require("express");

const userRoutes = require("./routes/user-routes");
const productRoutes = require("./routes/product-routes");

const app = express();

// middleware list
app.use(express.json());

// route list
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
