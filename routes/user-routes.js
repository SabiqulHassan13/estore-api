const express = require("express");

const UserController = require("../controllers/user-controller");

const router = express.Router();

// user routes
router.post("/", UserController.createNewUser);
router.get("/", UserController.findAllUsers);
router.get("/:id", UserController.findUserById);
router.put("/:id", UserController.updateUserById);
router.delete("/:id", UserController.deleteUserById);

module.exports = router;
