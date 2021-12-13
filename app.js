require("dotenv").config();
const express = require("express");

const sequelize = require("./utils/db-sequelize");
const userRoutes = require("./routes/user-routes");
// const productRoutes = require("./routes/product-routes");

const User = require("./models/user-model");
const Product = require("./models/product-model");

const app = express();

// db connection check
// sequelize
//   .sync()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully..."))
  .catch((err) => console.log("Database connection failed: " + err));

// middleware list
app.use(express.json());

// route list
app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
