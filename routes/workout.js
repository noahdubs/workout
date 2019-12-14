const express = require("express"),
      passport = require("passport"),
      User = require("../models/user"),
      Workout = require("../models/workout");

const router = express.Router({mergeParams: true});

router.get("/:workoutId", (req, res)=>{
    Workout.findById(req.params.workoutId).populate("exercises").exec((err, foundWorkout)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(foundWorkout);
        }
    });
});

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


module.exports = router;
