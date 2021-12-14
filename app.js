require("dotenv").config();
const express = require("express");

const { connectDB } = require("./utils/db-sequelize");
const userRoutes = require("./routes/user-routes");
const productRoutes = require("./routes/product-routes");

const app = express();

// db connection check
connectDB();

// middleware list
app.use(express.json());

// route list
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
