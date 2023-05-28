const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;
