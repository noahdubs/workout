const express = require("express"),
      User = require("../models/user"),
      Workout = require("../models/workout"),
      middleware = require("../middleware/index"),
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

// get all workouts
router.get("/", (req, res)=>{
    Workout.find({}, (err, workouts)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(workouts);
        }
    });
});


// get one workout
router.get("/:workoutId", (req, res)=>{
    Workout.findById(req.params.workoutId).populate("exercises").exec((err, workout)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(workout);
        }
    });
});


// post workout
router.post("/", parser.single("image"), middleware.isLoggedIn, (req, res)=>{
   const exercises = req.body.exerciseId 
   const sets = req.body.sets
   const reps = req.body.reps
   const result = []
   for(let i=0;i<exercises.length;i++){
        const obj = {}
        obj.id = exercises[i]
        obj.sets = sets[i]
        obj.reps = reps[i] 
        result.push(obj)
   } 
   const image = {};
   image.url = req.file.url;
   image.id = req.file.public_id;

   const author = {
       id: req.user._id,
       username: req.user.username,
       name: req.user.name
   }
   const newWorkout = {
       name: req.body.name,
       description: req.body.description,
       picture: image,
       author: author
   }
   Workout.create(newWorkout, (err, createdWorkout)=>{
       if(err){
           console.log(err);
       } else {
           result.forEach(exercise => {
               createdWorkout.exercises.push(exercise.id)
           })
           console.log(createdWorkout)
           res.json(createdWorkout);
       }
   })
})

// update workout
router.put("/:workoutId", (req, res)=>{
    Workout.findByIdAndUpdate(req.params.workoutId, req.body, (err, workout)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(workout);
        }
    });
});

// delete workout
router.delete("/:workoutId", (req, res)=>{
    Workout.findByIdAndDelete(req.params.workoutId, (err)=>{
        if(err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    })
})


module.exports = router;
