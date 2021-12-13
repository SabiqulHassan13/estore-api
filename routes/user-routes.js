const express = require("express");

const UserController = require("../controllers/user-controller");

const router = express.Router();

// user routes
router.get("/", UserController.getUserList);

router.get("/:id", UserController.getUserDetail);

router.post("/", UserController.createUser);

router.put("/:id", UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
