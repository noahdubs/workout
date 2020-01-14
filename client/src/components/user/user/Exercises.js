import React from 'react'

const Exercises = ({ user }) => {
    return (
        <div className="row user-wos-row">
            {user.exercises.map(exercise => (
                <div key={exercise._id}  className="col-lg-3 col-sm-6">
                    <div className="card wo-card">
                        <a href={`/exercise/${exercise._id}`}>
                            <img className="card-img-top all-wo-img" 
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
                            <p className="new-ex-item"><span>Type:</span> {exercise.exerciseType}</p>
                            <p className="new-ex-item"><span>Muscles:</span> {exercise.muscleGroup}</p>
                            <p className="new-ex-item"><span>Equipment:</span> {exercise.equipment}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Exercises 