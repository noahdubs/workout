const express = require("express"),
      passport = require("passport"),
      User = require("../models/user"),
      Exercise = require("../models/exercise");

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

router.post("/", (req, res)=>{
    console.log(req.params);
    Exercise.create(req.body, (err, exercise)=>{
        if(err) {
            console.log(err);
        } else {
            exercise.author.id = req.user._id;
            exercise.author.username = req.user.username;
            exercise.save();
            res.send(exercise);
        }
    });
});

router.put("/:exerciseId", (req, res)=>{
    Exercise.findByIdAndUpdate(req.params.exerciseId, req.body, (err, updatedExercise)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(updatedExercise);
        }
    });
});

router.delete("/:exerciseId", (req, res)=>{
    Exercise.findByIdAndDelete(req.params.exerciseId, (err)=>{
        if(err) {
            console.log(err);
        } else {
            res.redirect("back");
        }
    })
})

module.exports = router;
