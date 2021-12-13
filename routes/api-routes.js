const express = require("express");

const UserController = require("../controllers/api/user-controller");

const router = express.Router();

// user routes
router.get("/users", UserController.fetchUserList);
router.get("/users/:id", UserController.fetchUserDetail);
router.post("/users", UserController.createUser);
// router.put("/users/:id", UserController.updateUser);
// router.delete("/users/:id", UserController.deleteUser);

// product routes
// router.get("/products", ProductController.getProductList);
// router.get("/products/:id", ProductController.getProductDetail);
// router.post("/products", ProductController.createProduct);
// router.put("/products/:id", ProductController.updateProduct);
// router.delete("/products/:id", ProductController.deleteProduct);

module.exports = router;
