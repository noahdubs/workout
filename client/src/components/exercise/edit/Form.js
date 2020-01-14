import React from 'react'
import Select from '../newexercise/Select'

const Form = props => {
    return (
        <form action={`/api/exercise/${props.exercise._id}?_method=PUT`} method="POST" encType="multipart/form-data" className="new-ex-formm new-ex-col">
            <div className="row all-wo-row">
                <div className="col-md-6 new-ex-side">
                    <div className="form-group new-ex-group">
                        <label >Exercise name</label>
                        <input type="text" name="name" id="new-ex-name" placeholder={props.exercise.name} className="form-control form-box new-ex-form"/>
                    </div>
                    <div className="form-group new-ex-group">
                        <label >Description</label>
                        <input type="text" name="description" id="new-ex-name" placeholder={props.exercise.description} className="form-control form-box new-ex-form"/>
                    </div>
                    <div className="form-group new-ex-group">
                        <label>Picture</label>
                        <input type="file" name="image" className="form-control new-ex-file" />
                    </div>
                </div>
                <div className="col-md-6 select-col">
                    <Select />
                    <button className="btn form-button workout-btn">Update <i className="fas fa-edit icon"></i></button>
                </div> 
            </div>
            
        </form>
    )
}

export default Form 