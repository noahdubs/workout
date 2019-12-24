import React from 'react'
import Form from './Form'

const Container = props => {
    return (
        <div className="container exs-div">
            <div className="row new-ex-row">
                <div className="col-md-12 new-ex-form">
                    <Form handleChange={props.handleChange} />                   
                </div>
            </div>
        </div>
    )
}

export default Container 