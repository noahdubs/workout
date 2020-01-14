import React from 'react'

const Form = props => {
    return (
        <form action={`/api/workout/${props.workout._id}?_method=PUT`} method="POST" encType="multipart/form-data" className="new-ex-form">
            <div className="row all-wo-row">
                <div className="col-md-6 new-ex-side edit-wo-col">
                    <div className="form-group new-ex-group">
                        <label className="edit-wo-ex-name" >Workout name</label>
                        <input type="text" id="new-ex-name" name="name" placeholder={props.workout.name} className="form-control form-box new-ex-form"/>
                    </div>
                    <div className="form-group new-ex-group">
                        <label className="edit-wo-ex-name" >Description</label>
                        <input type="text" id="new-ex-desc" name="description" placeholder={props.workout.description}  className="form-control form-box new-ex-form"/>
                    </div>
                    <div className="form-group new-ex-group">
                        <label className="edit-wo-ex-name" >Workout picture</label>
                        <input type="file" name="image" className="form-control file-control"/>
                    </div>
                </div>
                <div className="col-md-6 edit-wo-col">
                    {props.workout.exercises.map(exercise => (
                        <div className="form-group" key={exercise._id._id}>
                            <p className="edit-wo-ex">{exercise._id.name}</p>
                            <div className="reps-sets-group">
                                <label className="reps-sets-label" >Sets</label>
                                <input type="number" name="sets" placeholder={exercise.sets} className="form-control reps-input" />
                                <label className="reps-sets-labels" >Reps</label>
                                <input type="number" name="reps" placeholder={exercise.reps} className="form-control reps-input" />
                                <i key={exercise._id} title={exercise._id._id} className="fas fa-trash-alt" onClick={props.handleClick}></i>
                            </div>
                        </div>
                    ))}
                    {props.deleted.map(item => (
                        <input type="text" name="exerciseId" value={item.deletedWorkout._id._id} className="invisible-ex" />
                    ))}
                    <button className="btn form-button workout-btn">Update <i className="fas fa-user-edit icon"></i></button>
                </div>
            </div>
        </form>
    )
}

export default Form 