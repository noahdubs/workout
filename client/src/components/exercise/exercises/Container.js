import React from 'react'
import AllExercises from './AllExercises'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'
import Search from './Search'

const Container = props => {
    return (
        <div className="wo-div">
            <div className="row">
                <LeftNavbar />
                <div className="col-md-10">
                    <Search 
                        handleChange={props.handleChange}
                        handleSearch={props.handleSearch}
                        search={props.search}
                    />
                    <AllExercises 
                        exercises={props.exercises}
                    />
                </div>
            </div>
        </div>
    )
}

export default Container 