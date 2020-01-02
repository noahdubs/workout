const User = require("../models/user"),
      Workout = require("../models/workout"),
      Exercise = require("../models/exercise");

const middlewareObj = {};

middlewareObj.isLoggedIn = (req, res, next)=> {
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect("/login");
    }
}

middlewareObj.checkUser = (req, res, next)=> {
    if(req.isAuthenticated()){
        User.findById(req.params.userId, (err, foundUser)=>{
            if(err) {
                req.flash("error", "something went wrong");
                res.redirect("back")
            } else {
                if(foundUser._id.equals(req.user._id)){
                    next();
                }else {
                    req.flash("error", "You dont have permission to do that");
                    res.redirect("back")
                }
            }
        })
    } else {
        res.redirect("/login");
    }
}

middlewareObj.checkWorkoutOwner = (req, res, next) => {
    if(req.isAuthenticated()){
        Workout.findById(req.params.workoutId, (err, foundWorkout) => {
            if(err) {
                res.redirect("back")
            } else {
                if(foundWorkout.author.id.equals(req.user._id)){
                    next()
                } else {
                    res.redirect("back")
                }
            }
        })
    } else {
        res.redirect("/login");
    }
}

middlewareObj.checkExerciseOwner = (req, res, next) => {
    if(req.isAuthenticated()){
        Exercise.findById(req.params.exerciseId, (err, foundExercise)=>{
            if(err){
                console.log(err)
            } else {
                if(foundExercise.author.id.equals(req.user._id)){
                    next()
                } else {
                    res.redirect("back")
                }
            }
        })
    } else {
        res.redirect("/login");
    }
}

module.exports = middlewareObj;