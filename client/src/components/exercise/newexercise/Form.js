import React from 'react'

const Form = props => {
    return (
        <form action="/api/exercise" method="post">
            {/* encType="multipart/form-data"*/}
            <h2 className="form-name">Add a new exercise</h2>
            <div className="form-group">
                <label for="exercise name">
                    <input type="text" name="name" onChange={props.handleChange}  placeholder="exercise name" className="form-control form-box" /> 
                </label>
            </div>
            <div className="form-group">
                <label for="exercise description">
                    <input type="text" name="description" onChange={props.handleChange}  placeholder="exercise description" className="form-control form-box" /> 
                </label>
            </div>
            <div className="form-group">
                <label for="exercise picture">
                    <input type="file" name="image" /> 
                </label>
            </div>
            <button className="btn new-ex-btn">Submit new exercise</button>
        </form>
    )
}

export default Form 