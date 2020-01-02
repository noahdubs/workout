import React from 'react'
import Select from './Select'

const Form = props => {
    return (
        <form action="/api/exercise" method="post" encType="multipart/form-data" className="new-ex-formm new-ex-col">
            <h2 className="form-name">Add a new exercise</h2>
            <div className="form-group">
                <label>Exercise Name</label>
                    <input type="text" name="name" onChange={props.handleChange}  placeholder="exercise name" className="form-control form-box new-ex-form" /> 
            </div>
            <Select />
            <div className="form-group">
                <label>Exercise description</label>
                    <input type="text" name="description" onChange={props.handleChange}  placeholder="exercise description" className="form-control form-box new-ex-form" /> 
            </div>
            <div className="form-group ">
                <label>Exercise picture</label>
                    <input type="file" name="image" className="form-control file-input new-ex-form" /> 
            </div>
            <button className="btn new-ex-btn workout-btn">Submit new exercise</button>
        </form>
    )
}

export default Form 