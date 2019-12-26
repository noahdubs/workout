import React from 'react'
import Form from './Form'

const Container = props => {
    return (
        <div className="row form-div">
            <div className="col-md-3"></div>
            <div className="col-md-6 form-content">
                <Form 
                    handleChange={props.handleChange}
                    workout={props.workout}
                    handleClick={props.handleClick}
                    deleted={props.deleted}
                />
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}

export default Container 