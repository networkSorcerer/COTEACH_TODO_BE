const express = require("express");
const router = express.Router();
const userController = require("..//controller/user.controller");
//1. 회원 가입
router.post("/", userController.creatUser);
router.post("/login", userController.loginWithEmail);
module.exports = router;
