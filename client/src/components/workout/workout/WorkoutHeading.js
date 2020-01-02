import React from 'react'
import LoggedIn from './LoggedIn'

const WorkoutHeading = ({ workout }) => {
    return (
        <div className="thumbnail">
            <img className="img-responsive" src={workout.picture.url}/>
            <div className="caption-full">
                <h3>{workout.name}</h3>
                <p>{workout.description}</p>
                <p> Submitted by 
                    <a href={`/users/${workout.author.id}`}> {workout.author.username}</a>
                </p>
            </div>
            <LoggedIn workout={workout}/>
        </div>
    )
}

export default WorkoutHeading 