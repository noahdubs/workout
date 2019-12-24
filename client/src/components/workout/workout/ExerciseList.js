import React from 'react'

const ExerciseList = ({ exercises }) => {
    return (
        <div className="ex-list">
            {exercises.map(exercise => (
                <div className="row ex-one" key={exercise._id._id}>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{exercise._id.name}</h1>
                            <p className="card-text">{exercise._id.description}</p>
                            <a href={`/exercise/${exercise._id._id}`} className="btn ex-btn">See More</a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h4>Sets: {exercise.sets}</h4>
                        <h4>Reps: {exercise.reps}</h4>
                    </div>
                </div>
            ))}                        
        </div>
    )
}

export default ExerciseList
