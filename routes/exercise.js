const express = require("express"),
      passport = require("passport"),
      User = require("../models/user");

const router = express.Router({mergeParams: true});


module.exports = router;
