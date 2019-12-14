const express = require("express"),
      passport = require("passport"),
      User = require("../models/user");

const router = express.Router({mergeParams: true});

router.get("/:userId", (req, res)=>{
    User.findById(req.params.UserId, (err, foundUser)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(foundUser);
        }
    });
});



module.exports = router;
