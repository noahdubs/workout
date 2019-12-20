import React from 'react'

const WorkoutsHeading = props => {
    return (
        <div className="container workouts-div">
            <div className="jumbotron">
                <div className="jumbo-content">
                    <h1 className="wo-heading">Workouts</h1>
                    <p className="wo-p">View our hand-picked selection of workouts</p>
                    <a href="/workout/new" className="btn btn-add-wo">Add a new workout</a>
                </div>
            </div> 

            <div className="row">
                
            </div>
        </div>
    )
}

export default WorkoutsHeading