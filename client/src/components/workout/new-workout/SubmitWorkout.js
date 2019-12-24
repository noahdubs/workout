import React from 'react'

const SubmitWorkout = () => {
    return (
        <span>
            <div className="form-group">
                <label for="description">Description
                    <input type="text" name="description" />
                </label>
            </div>
            <div className="form-group">
                <label for="picture">Picture
                    <input type="file" name="image" />
                </label>
            </div>
            <button type="submit" className="btn btn-submit-wo">Submit Workout</button>
        </span>
    )
}


export default SubmitWorkout 