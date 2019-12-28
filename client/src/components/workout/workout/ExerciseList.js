import React from 'react'

const ExerciseList = ({ exercises }) => {
    return (
        <div className="ex-list">
            {exercises.map(exercise => (
                <div className="row ex-one" key={exercise._id._id}>
                    <div className="col-md-4">
                        <div className="card-body">
                            <a className="new-wo-ex-title" href={`/exercise/${exercise._id._id}`}><h3 className="card-title">{exercise._id.name}</h3></a>
                        </div>
                    </div>
                    <div className="col-md-4 img-div">
                        <img src={exercise._id.picture.url} className="wo-ex-picture" alt={exercise.name} />
                    </div>
                    <div className="col-md-4 wo-reps-sets">
                        <h5>{exercise.sets} sets</h5>
                        <h5>{exercise.reps} reps</h5>
                    </div>
                </div>
            ))}                        
        </div>
    )
}

export default ExerciseList
