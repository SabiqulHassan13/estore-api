const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user-controller");

// auth routes
router.post("/register", UserController.createNewUser);
router.post("/login", UserController.loginCurrentUser);

// user routes
router.get("/", UserController.findAllUsers);
router.get("/:id", UserController.findUserById);
router.put("/:id", UserController.updateUserById);
router.delete("/:id", UserController.deleteUserById);

module.exports = router;
