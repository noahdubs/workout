const express = require("express"),
      passport = require("passport"),
      User = require("../models/user"),
      multer = require('multer'),
      cloudinary = require("cloudinary"),
      cloudinaryStorage = require("multer-storage-cloudinary"),
      cors = require('cors');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET 
});
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "profile-pics",
    allowedFormats: ["jpg", "png", "jpeg"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });

const router = express.Router({mergeParams: true});
router.use(cors())


// /api before this
router.post("/register", parser.single("image"), (req, res)=>{
    const image = {};
    if(typeof req.file === "undefined"){
        image.url = process.env.DEFAULT_PIC
    } else {
        image.url = req.file.url;
        image.id = req.file.public_id;
    }
    const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        picture: image 
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