import React from 'react'

const SubmitWorkout = () => {
    return (
        <div className="submit-wo-div">
            <div className="form-group">
                <label for="name">Workout name</label>
                <input type="text" name="name" className="form-control form-box"/>
            </div>
            <div className="form-group">
                <label for="description">Description</label>
                <input type="text" name="description" className="form-control form-box"/>
            </div>
            <div className="form-group">
                <label for="picture">Picture</label>
                <input type="file" name="image" className="form-control file-input"/>
            </div>
            <button type="submit" className="btn btn-submit-wo">Submit Workout</button>
        </div>
    )
}


export default SubmitWorkout 