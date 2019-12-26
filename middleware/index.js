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
    }
}

module.exports = middlewareObj;