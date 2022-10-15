const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const userprofileController = require("../controllers/userprofile");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/:user", ensureAuth, userprofileController.getUserProfile);


module.exports = router;
