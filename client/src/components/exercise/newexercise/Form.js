import React from 'react'
import Select from './Select'

const Form = props => {
    return (
            <form action="/api/exercise" method="post" encType="multipart/form-data" className="new-ex-form">
                <div className="row all-wo-row">
                    <div className="col-md-6 new-ex-side">
                        <div className="form-group new-ex-group">
                            <label>Exercise Name</label>
                            <input type="text" name="name" id="new-ex-name" onChange={props.handleChange}  placeholder="exercise name" className="form-control form-box new-ex-form" /> 
                        </div>
                        <div className="form-group new-ex-group">
                            <label>Exercise description</label>
                                <input type="text" name="description" id="new-ex-desc" onChange={props.handleChange}  placeholder="exercise description" className="form-control form-box new-ex-form" /> 
                        </div>
                        <div className="form-group new-ex-group">
                            <label>Exercise picture</label>
                                <input type="file" name="image" className="form-control new-ex-file" /> 
                        </div>
                    </div>
                    <div className="col-md-6 select-col">
                        <Select />
                        <button className="btn new-ex-button">Submit new exercise</button>

                    </div>
                </div>
            </form>
        
        
            
            
    )
}

export default Form
