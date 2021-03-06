const mongoose = require("mongoose");
      passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new mongoose.Schema ({
    name: String,
    username: String,
    password: String,
    bio: String,
    picture: {
        url: String,
        id: String 
    },
    workouts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Workout",
            name: String 
        }
    ],
    exercises: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Exercise",
            name: String 
        }
    ]
    
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);