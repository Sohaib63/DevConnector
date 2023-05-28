const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Auth route"));

module.exports = router;
