const express = require("express");
const router = express.Router();
const userController = require("..//controller/user.controller");
const authController = require("../controller/auth.controller");
//1. 회원 가입
router.post("/", userController.creatUser);
router.post("/login", userController.loginWithEmail);
router.get("/me", authController.authenticate, userController.getUser);
module.exports = router;
