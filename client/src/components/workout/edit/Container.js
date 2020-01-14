import React from 'react'
import Form from './Form'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'
import Breadcrumb from './Breadcrumb' 

const Container = props => {
    return (
        <div className="wo-div">
            <div className="row all-ex-row">
                <LeftNavbar />
                <div className="col-md-10 al-wo-main-col">
                    <Breadcrumb workout={props.workout} />
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