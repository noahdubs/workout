import React from 'react'
import Form from './Form'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'

const Container = props => {
    return (
        <div className="wo-div">
            <div className="row">
                <LeftNavbar />
                <div className="col-md-10">
                    <Form 
                        handleChange={props.handleChange}
                        workout={props.workout}
                        handleClick={props.handleClick}
                        deleted={props.deleted}
                    />
                </div>
            </div>
        </div>
    )
}

export default Container 