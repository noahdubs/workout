const express = require("express"),
      passport = require("passport"),
      User = require("../models/user"),
      Exercise = require("../models/exercise"),
      middleWare = require("../middleware/index"),
      multer = require('multer'),
      cloudinary = require("cloudinary"),
      cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET 
});
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "demo",
    allowedFormats: ["jpg", "png", "jpeg"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });

const router = express.Router({mergeParams: true});

// everything begins with /api/exercise

// get all exercises
router.get("/", (req, res)=>{
    Exercise.find({}, (err, exercises)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(exercises);
        }
    });
});

// get one exercise
router.get("/:exerciseId", (req, res)=>{
    Exercise.findById(req.params.exerciseId, (err, exercise)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(exercise);
        }
    });
});

router.post("/", parser.single("image"), middleWare.isLoggedIn, (req, res)=>{
    // const image = {};
    // image.url = req.file.url;
    // image.id = req.file.public_id;
    const newExercise = {
        name: req.body.name, 
        description: req.body.description,
        // picture: image
    }
    Exercise.create(newExercise, (err, exercise)=>{
        if(err) {
            console.log(err);
        } else {
            exercise.author.id = req.user._id;
            exercise.author.username = req.user.username;
            exercise.save();
            res.redirect("/exercise/" + exercise._id);
        }
    });
});

router.get("/find/:search", (req, res)=>{
    const search = req.params.search
    Exercise.find({name:search}, (err, exercises)=>{
        if(err){
            console.log(err);
        } else {
            res.json(exercises);
        }
    })
})

router.put("/:exerciseId", middleWare.isLoggedIn, (req, res)=>{
    Exercise.findByIdAndUpdate(req.params.exerciseId, req.body, (err, updatedExercise)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(updatedExercise);
        }
    });
});

router.delete("/:exerciseId", middleWare.isLoggedIn, (req, res)=>{
    Exercise.findByIdAndDelete(req.params.exerciseId, (err)=>{
        if(err) {
            console.log(err);
        } else {
            res.redirect("back");
        }
    })
})

module.exports = router;
