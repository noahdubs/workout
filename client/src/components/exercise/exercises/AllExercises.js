import React from 'react'

const AllExercises = ({ exercises }) => {
    return (
        <div className="row all-wo-row">
            {exercises.map(exercise => (
                <div key={exercise._id}  className="col-lg-3 col-md-4 col-sm-6">
                    <div className="card wo-card">
                        <a href={`/exercise/${exercise._id}`} >
                            <img class="card-img-top all-wo-img" 
                                src={exercise.picture.url}
                                alt={exercise.name}    
                            />
                        </a>
                        <div className="card-body">
                            <a className="all-wo-title-link" href={`/exercise/${exercise._id}`}>
                                <h5 className="card-title">
                                    <i class="fas fa-dumbbell all-wo-icon"></i>
                                    {exercise.name}
                                </h5>
                            </a>
                            <p className="new-ex-item"><span className="all-ex-info">Type:</span> {exercise.exerciseType}</p>
                            <p className="new-ex-item"><span className="all-ex-info">Muscles:</span> {exercise.muscleGroup}</p>
                            <p className="new-ex-item"><span className="all-ex-info">Equipment:</span> {exercise.equipment}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllExercises 