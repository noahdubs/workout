import React from 'react'

const AllExercises = ({ exercises }) => {
    return (
        <div className="row">
            {exercises.map(exercise => (
                <div key={exercise._id}  className="col-lg-3 col-sm-6">
                    <div className="card wo-card">
                        <img class="card-img-top" src={exercise.picture.url} />
                        <div className="card-body">
                            <h5 className="card-title">{exercise.name}</h5>
                            <p className="new-ex-item"><span>Type:</span> {exercise.exerciseType}</p>
                            <p className="new-ex-item"><span>Muscles:</span> {exercise.muscleGroup}</p>
                            <p className="new-ex-item"><span>Equipment:</span> {exercise.equipment}</p>
                            <a href={`/exercise/${exercise._id}`} class="btn wo-sm-btn">See More</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllExercises 