import React from 'react'
import SubmitWorkout from './SubmitWorkout'

const AddedExercises = props => {
    return (
        <div className="col-md-6 new-ex-right">
            <form action="/api/workout" method="POST" encType="multipart/form-data">
                <SubmitWorkout />
                <h4 className="new-wo-h">Added Exercises</h4> 
                {props.addedExercises.map(exercise => (
                    <div className="row new-ex-card" key={exercise.id}>
                        <div className="col-md-4 added-ex-name">
                            <h3 className="card-title"><a className="new-wo-add-ex" href={`/exercise/${exercise.id}`}>{exercise.name}</a></h3>
                        </div>
                        <div className="col-md-8 form-group info-group">
                            <input type="text" name="exerciseId" value={exercise.id} id="invisible-ex" />
                            <label className="reps-label">Sets</label>
                            <input type="number" name="sets" className="reps-sets form-control" />
                            <label className="reps-label">Reps</label>
                            <input type="number" name="reps" className="reps-sets form-control" />
                        </div>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default AddedExercises 