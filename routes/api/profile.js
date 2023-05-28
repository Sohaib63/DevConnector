const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;
