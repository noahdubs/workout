import React from 'react'
import Form from './Form'

const Container = props => {
    return (
        <div className="row form-div">
            <div className="col-md-3"></div>
            <div className="col-md-6 form-content">
                {/* encType="multipart/form-data"*/}
                <Form 
                    handleChange={props.handleChange}
                    name={props.name}
                    username={props.username}
                    password={props.password}
                />
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}

export default Container 