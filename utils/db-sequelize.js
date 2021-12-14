const { Sequelize } = require("sequelize");

const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
});

const connectDB = async () => {
  try {
    const result = await sequelize.authenticate();
    console.log("Database connected successfully...");
    // return;
  } catch (err) {
    console.log("Database connection failed: " + err);
  }
};

// module.exports = sequelize;
module.exports = { sequelize, connectDB };
