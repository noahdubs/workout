import React from 'react'

const Form = props => {
    return (
        <form action={`/api/workout/${props.workout._id}?_method=PUT`} method="POST" encType="multipart/form-data">
            <h2 className="form-name">Edit Workout</h2>
            <div className="form-group">
                <label className="edit-wo-ex-name" >Workout name</label>
                <input type="text" name="name" placeholder={props.workout.name} className="form-control form-box"/>
            </div>
            <div className="form-group">
                <label className="edit-wo-ex-name" >Description</label>
                <input type="text" name="description" placeholder={props.workout.description}  className="form-control form-box"/>
            </div>
            <div className="form-group">
                <label className="edit-wo-ex-name" >Workout picture</label>
                <input type="file" name="image"/>
            </div>
            {props.workout.exercises.map(exercise => (
                <div className="form-group" key={exercise._id._id}>
                    <p className="edit-wo-ex-name">{exercise._id.name}</p>
                    <div className="reps-sets-group">
                        <input type="number" name="sets" placeholder={exercise.sets} className="form-control reps-sets-form" />
                        <input type="number" name="reps" placeholder={exercise.reps} className="form-control reps-sets-form" />
                        <i key={exercise._id} title={exercise._id._id} className="fas fa-trash-alt" onClick={props.handleClick}></i>
                    </div>
                </div>
            ))}
            {props.deleted.map(item => (
                <input type="text" name="exerciseId" value={item.deletedWorkout._id._id} className="invisible-ex" />
            ))}
            <button className="btn form-button workout-btn">Update <i className="fas fa-user-edit icon"></i></button>
        </form>
    )
}

export default Form 