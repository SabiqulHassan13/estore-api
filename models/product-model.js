const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/db-sequelize");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false,
  },
  qty: {
    type: DataTypes.INTEGER,
    defaultValue: 5,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Product;
