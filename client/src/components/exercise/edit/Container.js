import React from 'react'
import Form from './Form'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'
import Breadcrumb from './Breadcrumb' 

const Container = ({ exercise }) => {
    return (
        <div className="wo-div">
            <div className="row all-ex-row">
                <LeftNavbar />
                <div className="col-md-10 all-wo-main-col">
                    <Breadcrumb exercise={exercise} />
                    <Form 
                        exercise={exercise}
                    />
                </div>
            </div>
        </div>
    )
}

export default Container 