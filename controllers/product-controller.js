const Product = require("../models/product-model");

exports.createNewProduct = async (req, res) => {
  const { name, price, qty } = req.body;

  try {
    // create a new product
    const newProduct = await Product.create({ name, price, qty });

    return res
      .status(201)
      .json({ message: "Product created successfully", newProduct });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Product creation failed",
    });
  }
};

exports.findAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    if (products === null) {
      return res.status(404).json({ message: "Products not found", products });
    }

    return res.status(200).json({ products });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.findProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ where: { id } });

    if (product === null) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ product });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.updateProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.update(req.body, { where: { id } });

    if (product == 1) {
      return res.status(200).json({ message: "Product updated successfully" });
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
