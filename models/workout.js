const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema ({
    name: String,
    description: String,
    picture : {
        id: String,
        url: String 
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        name: String 
    },
    exercises: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Exercise" ,
            sets: String,
            reps: String 
        }
    ]
});

module.exports = mongoose.model("Workout", workoutSchema);