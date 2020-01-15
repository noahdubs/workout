import React from 'react'
import Form from './Form'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'
import Breadcrumb from './Breadcrumb'

const Container = props => {
    const currentPage = "NewExercise"
    return (
        <div className="wo-div">
            <div className="row all-ex-row">
                <LeftNavbar currentPage={currentPage} />
                <div className="col-md-9 col-lg-10 all-wo-main-col">
                    <Breadcrumb />
                    <Form handleChange={props.handleChange} />
                </div>
            </div>
        </div>
    )
}

export default Container