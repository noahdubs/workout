import React from 'react'
import LoggedIn from './LoggedIn'

const ExerciseHeading = ({ exercise }) => {
    console.log(exercise)
    return (
        <div className="row all-wo-row ind-ex-row"> 
            <div className="col-md-8">
                <h1 className="ind-ex-h">{exercise.name}</h1>
                <img className="img-responsive ex-pic" src={exercise.picture.url} alt={exercise.name}/>
            </div>
            <div className="col-md-4 ex-info">
                <p><span className="ex-span top-span">Exercise type:</span> {exercise.exerciseType}</p>
                <p><span className="ex-span">Muscles worked:</span> {exercise.muscleGroup}</p>
                <p><span className="ex-span">Equipment used:</span> {exercise.equipment}</p>
                <p> Submitted by 
                    <a href={`/users/${exercise.author.id}`} className="new-wo-ex-title"> {exercise.author.username}</a>
                </p>
                <h3 className="ind-ex-how-to">How to perform:</h3>
                <p>{exercise.description}</p>
                <LoggedIn exercise={exercise}/>
            </div>
        </div>
    )
}

export default ExerciseHeading

