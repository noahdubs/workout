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
    execises: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Exercise",
            reps: Number, 
            sets: Number 
        }
    ]
});

module.exports = mongoose.model("Workout", workoutSchema);