import React from 'react'

const WorkoutsHeading = () => {
    return (
        <div className="container workouts-div">
            <div className="jumbotron">
                <div className="jumbo-content">
                    <h1 className="wo-heading">Workouts</h1>
                    <p className="wo-p">View our hand-picked selection of workouts</p>
                    <a href="/workout/new" className="btn btn-add-wo workout-btn">Add a new workout</a>
                </div>
            </div> 
        </div>
    )
}

export default WorkoutsHeading