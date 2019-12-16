const express = require("express"),
      passport = require("passport"),
      User = require("../models/user"),
      Workout = require("../models/workout");

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
    Workout.findById(req.params.workoutId).populate("exercises").exec((err, foundWorkout)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(foundWorkout);
        }
    });
});


// post workout
router.post("/", (req, res)=>{
    User.findById(req.params.userId, (err, user)=>{
        if(err) {
            console.log(err);
        } else {
            Workout.create(req.body, (err, workout)=>{
                if(err){
                    console.log(err);
                } else {
                    workout.author.id = user._id;
                    workout.author.username = user.username;
                    workout.save();
                    user.workouts.push(workout);
                    user.save();
                    res.redirect("/workout/"+workout._id);
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
