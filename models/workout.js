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
    exercises: [{
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Exercise", 
            },
            reps: String,
            sets: String 
    }],
    id_list: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Exercise"
        }    
    ]
});

module.exports = mongoose.model("Workout", workoutSchema);