import React from 'react'
import Select from '../newexercise/Select'

const Form = props => {
    return (
        <form action={`/api/exercise/${props.exercise._id}?_method=PUT`} method="POST" encType="multipart/form-data" className="new-ex-formm new-ex-col">
            <h2 className="form-name">Edit exercise "{props.exercise.name}"</h2>
            <div className="form-group">
                <label className="edit-wo-ex-name">Exercise name</label>
                <input type="text" name="name" placeholder={props.exercise.name} className="form-control form-box new-ex-form"/>
            </div>
            <div className="form-group">
                <label className="edit-wo-ex-name">Description</label>
                <input type="text" name="description" placeholder={props.exercise.description} className="form-control form-box new-ex-form"/>
            </div>
            <div className="form-group">
                <label>Picture</label>
                <input type="file" name="image" className="form-control file-input" />
            </div>
            <Select />
            <button className="btn form-button workout-btn">Update <i className="fas fa-edit icon"></i></button>
        </form>
    )
}

export default Form 