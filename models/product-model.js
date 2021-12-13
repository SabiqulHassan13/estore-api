const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/db-mysql");

const Product = sequelize.define(
  "Product",
  {
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
    image_url: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);

module.exports = Product;
