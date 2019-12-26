import React from 'react'
import SubmitWorkout from './SubmitWorkout'

const AddedExercises = props => {
    return (
        <div className="col-md-6 new-ex-right">
            <form action="/api/workout" method="POST" encType="multipart/form-data">
                <SubmitWorkout />
                <h3 className="new-wo-h">Added Exercises</h3> 
                {props.addedExercises.map(exercise => (
                    <div className="row new-ex-card" key={exercise.id}>
                        <div className="col-md-5">
                            <h3 className="card-title"><a className="new-wo-ex-title" href={`/exercise/${exercise.id}`}>{exercise.name}</a></h3>
                        </div>
                        <div className="col-md-7 form-group info-group">
                            <input type="text" name="exerciseId" value={exercise.id} className="invisible-ex" />
                            <label className="reps-label" for="sets">Sets:</label>
                            <input type="number" name="sets" className="reps-sets form-control" />
                            <label className="reps-label" for="reps">Reps:</label>
                            <input type="number" name="reps" className="reps-sets form-control" />
                        </div>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default AddedExercises 