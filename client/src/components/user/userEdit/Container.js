import React from 'react'
import Form from './Form'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'
const Container = props => {
    return (
        <div className="container wo-div">
            <div className="row">
                <LeftNavbar />
                <div className="col-md-9 new-ex-col">
                    <Form 
                        handleChange={props.handleChange}
                        user={props.user}
                    />
                </div>
            </div>
        </div>
    )
}

export default Container