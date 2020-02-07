import React from 'react'
import Form from './Form'

const Container = props => {
    return (
        <div className="row reg-div">
            <div className="col-md-2"></div>
            <div className="col-md-8 form-content">
                <Form 
                    handleChange={props.handleChange}
                    name={props.name}
                    username={props.username}
                    password={props.password}
                />
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}

export default Container 