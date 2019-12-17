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

module.exports = middlewareObj;