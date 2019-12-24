import React from 'react'

const WorkoutHeading = ({ workout }) => {
    return (
        <div className="card-body wo-general">
            <h1 className="card-title">Workout Name</h1>
            <p className="card-text">{workout.description}</p>
            <a href={`/users/${workout.author.id}`}><p className="card-text" className="ex-author-link">Created By: {workout.author.name}</p></a>
        </div>
    )
}

export default WorkoutHeading 