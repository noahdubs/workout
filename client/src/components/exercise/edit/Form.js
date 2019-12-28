import React from 'react'

const Form = props => {
    return (
        <form action={`/api/exercise/${props.exercise._id}?_method=PUT`} method="POST" encType="multipart/form-data">
            <h2 className="form-name">Edit Exercise</h2>
            <div className="form-group">
                <label className="edit-wo-ex-name">Exercise name</label>
                <input type="text" name="name" placeholder={props.exercise.name} className="form-control form-box"/>
            </div>
            <div className="form-group">
                <label className="edit-wo-ex-name">Description</label>
                <input type="text" name="description" placeholder={props.exercise.description} className="form-control form-box"/>
            </div>
            <div className="form-group">
                <label>Profile picture</label>
                <input type="file" name="image" />
            </div>
            <button className="btn form-button workout-btn">Update <i className="fas fa-user-edit icon"></i></button>
        </form>
    )
}

export default Form 