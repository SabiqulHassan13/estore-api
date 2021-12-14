const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product-controller");
const validateRequest = require("../utils/validate-request");
const { createProductSchema } = require("../schemas/product-schema");

// product routes
// validateRequest(createProductSchema),

router.post("/", ProductController.createNewProduct);
router.get("/", ProductController.findAllProducts);
router.get("/:id", ProductController.findProductById);
router.put("/:id", ProductController.updateProductById);
router.delete("/:id", ProductController.deleteProductById);

module.exports = router;
