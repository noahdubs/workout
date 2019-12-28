import React from 'react'
import LoggedIn from './LoggedIn'

const WorkoutHeading = ({ workout }) => {
    return (
        <div className="card-body wo-general">
            <div className="row">
                <div className="col-md-5">
                <h1 className="card-title">{workout.name}</h1>
                    <a href={`/users/${workout.author.id}`}><p className="card-text ex-author-link">Created By: {workout.author.name}</p></a> 
                </div>
                <div className="col-md-5">
                    <img src={workout.picture.url} className="ex-picture" alt={workout.name} />
                </div>
                <LoggedIn workout={workout} />
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 ex-desc">
                    <h5 className="ex-desc-h">Description</h5>
                    <p>{workout.description}</p>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default WorkoutHeading 