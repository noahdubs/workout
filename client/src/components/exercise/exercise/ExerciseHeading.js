import React from 'react'
import LoggedIn from './LoggedIn'

const ExerciseHeading = ({ exercise }) => {
    return (
        <div className="thumbnail">
            <img className="img-responsive" src={exercise.picture.url} alt={exercise.name}/>
            <div className="caption-full">
                <div className="row">
                    <div className="col-md-8">
                        <h3>{exercise.name}</h3>
                        <p>{exercise.description}</p>
                    </div>
                    <div className="col-md-4">
                        <p><span className="ex-span">Exercise type:</span> {exercise.exerciseType}</p>
                        <p><span className="ex-span">Muscles worked:</span> {exercise.muscleGroup}</p>
                        <p><span className="ex-span">Equipment used:</span> {exercise.equipment}</p>
                        <p> Submitted by 
                            <a href={`/users/${exercise.author.id}`} className="new-wo-ex-title"> {exercise.author.username}</a>
                        </p>
                    </div>
                </div>
                
                
            </div>
            
            <LoggedIn exercise={exercise}/>
        </div>
    )
}

export default ExerciseHeading