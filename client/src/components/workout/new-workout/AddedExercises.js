import React from 'react'
import SubmitWorkout from './SubmitWorkout'

const AddedExercises = props => {
    return (
        <div className="col-md-6 new-ex-right">
            <h3 className="new-wo-h">Added Exercises</h3> 
            <form action="/api/workout" method="POST" > 
                {props.addedExercises.map(exercise => (
                    <div className="row new-ex-card" key={exercise.id}>
                        <div className="col-md-6">
                            <h3 className="card-title"><a href={`/exercise/${exercise.id}`}>{exercise.name}</a></h3>
                        </div>
                        <div className="col-md-6 form-group">
                            <input type="text" name="exerciseId" value={exercise.id} className="invisible-ex" />
                            Reps
                            <input type="number" name="sets" className="reps-sets form-control" />
                            Sets
                            <input type="number" name="reps" className="reps-sets form-control" />
                        </div>
                    </div>
                ))}
                <SubmitWorkout />
            </form>
        </div>
    )
}

export default AddedExercises 