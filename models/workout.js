const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema ({
    name: String,
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
            sets: Number,
            reps: Number
        }
    ]
});

module.exports = mongoose.model("Workout", workoutSchema);