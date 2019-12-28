const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema ({
    name: String,
    description: String,
    exerciseType: String,
    muscleGroup: String,
    equipment: String,
    picture: {
        id: String, 
        url: String 
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Exercise", exerciseSchema);