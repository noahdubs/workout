const express = require("express"),
      passport = require("passport"),
      User = require("../models/user"),
      middleware = require("../middleware/index");

const router = express.Router({mergeParams: true});

router.get("/:userId", (req, res)=>{
    User.findById(req.params.userId).populate("workouts").exec((err, foundUser)=>{
        if(err) {
            console.log(err);
        } else {
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
router.put("/:userId", middleware.checkUser, (req, res)=>{
    User.findByIdAndUpdate(req.params.userId, req.body, (err, updatedUser)=>{
        if(err) {
            console.log(err);
        } else {
            res.redirect(`/users/${updatedUser._id}`)
        }
    });
});

// delete 
router.delete("/:userId", middleware.checkUser, (req, res)=>{
    User.findByIdAndDelete(req.params.userId, (err)=>{
        if(err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});



module.exports = router;
