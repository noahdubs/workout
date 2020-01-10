import React from 'react'
import Form from './Form'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'

const Container = props => {
    const currentPage = "NewExercise"
    return (
        <div className="wo-div">
            <div className="row">
                <LeftNavbar currentPage={currentPage} />
                <div className="col-md-10">
                    <Form handleChange={props.handleChange} />
                </div>
            </div>
        </div>
    )
}

export default Container 