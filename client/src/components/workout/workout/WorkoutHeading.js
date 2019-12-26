import React from 'react'
import LoggedIn from './LoggedIn'

const WorkoutHeading = ({ workout }) => {
    return (
        <div className="card-body wo-general">
            <div className="row">
                <div className="col-md-5">
                    <h1 className="card-title">Workout Name</h1>
                    <a href={`/users/${workout.author.id}`}><p className="card-text" className="ex-author-link">Created By: {workout.author.name}</p></a> 
                </div>
                <div className="col-md-5">
                    <img src={workout.picture.url} className="ex-picture" />
                </div>
                <LoggedIn workout={workout} />
            </div>
            <p className="card-text">{workout.description}</p>
        </div>
    )
}

export default WorkoutHeading 