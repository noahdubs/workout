const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      LocalStrategy = require("passport-local"),
      passport = require('passport'),
      User = require("./models/user"),
      cors = require("cors"),
      methodOverride = require("method-override"),
      flash = require("connect-flash"),
      path = require("path");

require('dotenv').config();

const userRoute = require("./routes/user"),
      workoutRoute = require("./routes/workout"),
      exerciseRoute = require("./routes/exercise"),
      indexRoute = require("./routes/index");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(flash());
app.use(express.static(path.join(__dirname, "client/build")));

mongoose.connect(`mongodb+srv://noahdubs:${process.env.CLUSTER_PASSWORD}@cluster0-wbttr.mongodb.net/workout?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})

app.use(require("express-session")({
    secret: process.env.SECRET_CODE,
    resave: false,
    saveUninitialized: false 
}));
app.use((req,res,next)=>{
    res.locals.error = req.flash("error")
    res.locals.success = req.flash("success")
    next()
})
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);
app.use("/api", indexRoute);
app.use("/api/users", userRoute);
app.use("/api/workout", workoutRoute);
app.use("/api/exercise", exerciseRoute);

app.get("*", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
})

app.listen(process.env.PORT, ()=> {console.log("starting on port " + process.env.PORT);}); 