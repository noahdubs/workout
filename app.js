const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      LocalStrategy = require("passport-local"),
      passport = require('passport'),
      User = require("./models/user");
      
const userRoute = require("./routes/user"),
      workoutRoute = require("./routes/workout"),
      exerciseRoute = require("./routes/exercise"),
      indexRoute = require("./routes/index");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/workout", {useNewUrlParser:true, useUnifiedTopology:true});

app.use(require("express-session")({
    secret: "not sure what this is supposed to be",
    resave: false,
    saveUninitialized: false 
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/api", indexRoute);
app.use("/api/user", userRoute);
app.use("/api/workout", workoutRoute);
app.use("/api/exercise", exerciseRoute);

app.listen(5000, ()=> {console.log("starting server");});