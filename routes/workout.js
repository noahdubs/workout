const express = require("express"),
      User = require("../models/user"),
      Workout = require("../models/workout"),
      middleware = require("../middleware/index");

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
router.post("/", middleware.isLoggedIn, (req, res)=>{
   console.log(req.body); 
   const name = req.body.name
   const exercises = req.body.exerciseId
   User.findById(req.user._id, (err, user)=>{
       if(err){
           console.log(err);
       } else {
            Workout.create({name:name}, (err, workout)=>{
                if(err) {
                    console.log(err);
                } else {
                    exercises.forEach((exercise) => {
                        workout.exercises.push(exercise)
                    });
                    user.workouts.push(workout);
                    user.save();
                    workout.author.id = req.user._id;
                    workout.author.username = req.user.username;
                    workout.author.name = req.user.name;
                    workout.save();
                    res.redirect("/workout/" + workout._id)
                }
            })
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
