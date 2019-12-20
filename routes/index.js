const express = require("express"),
      passport = require("passport"),
      User = require("../models/user");

const router = express.Router({mergeParams: true});


// /api before this
router.post("/register", (req, res)=>{
    console.log(req.body);
    const newUser = new User({
        username: req.body.username,
        name: req.body.name,

    });
    User.register(newUser, req.body.password, (err, user)=>{
        if(err) {
            console.log(err);
        }
        passport.authenticate("local")(req, res, ()=>{
            res.redirect("/users/" + user._id)
        });
    });
});

router.post("/login", passport.authenticate("local", {failureRedirect: "/login"}), (req, res)=>{
    res.redirect("/");
});

router.get("/logout", (req, res)=>{
    req.logOut();
    res.json(false)
});

router.get("/check", (req, res)=>{
    if(req.user) {
        res.json(req.user); 
    } else {
        res.json(false);
    }
})



module.exports = router;