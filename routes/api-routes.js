const express = require("express");

const UserController = require("../controllers/api/user-controller");

const router = express.Router();

// user routes
router.get("/users", UserController.fetchUserList);
router.get("/users/:id", UserController.fetchUserDetail);
router.post("/users", UserController.createUser);
// router.put("/users/:id", UserController.updateUser);
// router.delete("/users/:id", UserController.deleteUser);

module.exports = router;
