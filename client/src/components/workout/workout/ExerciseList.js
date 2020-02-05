import React from 'react'

const ExerciseList = ({ exercises }) => {
    return (
        <div className="ex-list-row">
            {exercises.map(exercise => (
                <div className="row ex-one">
                    <div className="col-md-3 img-div">
                        {exercises.indexOf(exercise)+1}
                        <img src={exercise._id.picture.url} alt={exercise.name} className=" ind-wo-ex-img"/>
                    </div>
                    <div className="col-md-3 wo-ex-name">
                        <h3><a href={`/exercise/${exercise._id._id}`} className="ind-wo-ex-name">{exercise._id.name}</a></h3>
                    </div>
                    <div className="col-md-2 wo-reps-sets">
                        <p className="ind-wo-ex-rs">{exercise.sets} sets</p>
                        <p className="ind-wo-ex-rs">{exercise.reps} reps</p>
                    </div>
                    <div className="col-md-4 wo-ex-info">
                        <p className="ex-information"><span className="ex-span">Exercise type:</span> {exercise._id.exerciseType}</p>
                        <p className="ex-information"><span className="ex-span">Muscles worked:</span> {exercise._id.muscleGroup}</p>
                        <p className="ex-information"><span className="ex-span">Equipment used:</span> {exercise._id.equipment}</p>
                        
                    </div>
                </div>
            )) }
        </div>
    )
}

export default ExerciseList