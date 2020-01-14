const express = require("express"),
      passport = require("passport"),
      User = require("../models/user"),
      middleware = require("../middleware/index"),
      cloudinary = require("cloudinary"),
      multer = require('multer'),
      cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET 
});
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "exercise",
    allowedFormats: ["jpg", "png", "jpeg"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });

const router = express.Router({mergeParams: true});

router.get("/:userId", (req, res)=>{
    User.findById(req.params.userId).populate("workouts").populate("exercises").exec((err, foundUser)=>{
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
router.put("/:userId", parser.single("image"),  middleware.checkUser, (req, res)=>{
    if(req.file){
        User.findByIdAndUpdate(req.params.userId, {
            $set: {
                picture: {
                    url: req.file.url,
                    id: req.file.public_id
                }
            }
        })
            .catch(err => {
                console.log(err)
                res.status(500).send("Error")
            })
    }
    User.findByIdAndUpdate(req.params.userId, req.body)
        .then(updatedUser => {
            res.redirect(`/users/${updatedUser._id}`)
        .catch(err => {
            console.log(err)
            res.status(500).send("Error")
        })
    })
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
