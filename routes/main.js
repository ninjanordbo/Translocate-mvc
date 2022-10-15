const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/postentur", ensureAuth, postsController.getProfile);
router.get("/turtavle", ensureAuth, postsController.getFeed);
router.get("/logginn", authController.getLogin);
router.post("/logginn", authController.postLogin);
router.get("/loggut", authController.logout);
router.get("/lagkonto", authController.getSignup);
router.post("/lagkonto", authController.postSignup);

module.exports = router;
