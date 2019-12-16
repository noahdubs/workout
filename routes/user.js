const express = require("express"),
      passport = require("passport"),
      User = require("../models/user");

const router = express.Router({mergeParams: true});

router.get("/:userId", (req, res)=>{
    User.findById(req.params.userId, (err, foundUser)=>{
        if(err) {
            console.log(err);
        } else {
            console.log(foundUser);
            res.json(foundUser);
        }
    });
});

// index
router.get("/", (req, res)=>{
    User.find({}, (err, users)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// update
router.put("/:userId", (req, res)=>{
    User.findByIdAndUpdate(req.params.userId, req.body, (err, updatedUser)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(updatedUser);
        }
    });
});

// delete 
router.delete("/:userId", (req, res)=>{
    User.findByIdAndDelete(req.params.userId, (err)=>{
        if(err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});



module.exports = router;
