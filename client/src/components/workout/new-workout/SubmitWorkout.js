import React from 'react'

const SubmitWorkout = () => {
    return (
        <div className="submit-wo-div">
            <div className="form-group">
                <label>Workout name</label>
                <div className="input-group">
                    <input type="text" name="name" className="form-control form-box"/>
                </div>
            </div>
            <div className="form-group">
                <label>Description</label>
                <div className="input-group">
                    <input type="text" name="description" className="form-control form-box"/>
                </div>
            </div>
            <div className="form-group">
                <label>Picture</label>
                <input type="file" name="image" className="form-control new-wo-file"/>
            </div>
            <button type="submit" className="btn new-workout-button">Submit Workout</button>
        </div>
    )
}


export default SubmitWorkout 