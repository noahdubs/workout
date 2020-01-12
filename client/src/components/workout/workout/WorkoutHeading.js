import React from 'react'
import LoggedIn from './LoggedIn'
import ExerciseList from './ExerciseList'

const WorkoutHeading = ({ workout }) => {
    return (
        <div className="row all-wo-row ind-ex-row">
            <div className="col-md-8">
                <h1 className="ind-ex-h">{workout.name}</h1>
                <img className="img-responsive ex-pic" src={workout.picture.url} alt={workout.name}/>
            </div>
            <div className="col-md-4 ex-info">
                <h3 className="ind-ex-h">About {workout.name}:</h3>
                <p>{workout.description}</p>
                <p className="ind-wo-author"> Submitted by 
                    <a href={`/users/${workout.author.id}`} className="new-wo-ex-title"> {workout.author.username}</a>
                </p>
                <LoggedIn workout={workout}/>
            </div>
            <ExerciseList exercises={workout.exercises} />
        </div>
    )
}

export default WorkoutHeading 