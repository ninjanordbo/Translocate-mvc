const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const userController = require("../controllers/userProfile");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.post("/createUserProfile", upload.single("file"), createUserProfile.createUserProfile);

router.delete("/deleteUserProfile/:id", createUserProfile.deleteUserProfile);

module.exports = router;
