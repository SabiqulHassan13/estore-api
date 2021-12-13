require("dotenv").config();
const express = require("express");

const sequelize = require("./utils/db-sequelize");
const userRoutes = require("./routes/user-routes");
// const productRoutes = require("./routes/product-routes");

const User = require("./models/user-model");
const Product = require("./models/product-model");

const app = express();

// db connection
sequelize
  .sync()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// middleware list
app.use(express.json());

// route list
app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
