import React from 'react'
import AllExercises from './AllExercises'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'
import Search from './Search'

const Container = props => {
    const currentPage = "Exercises"
    return (
        <div className="wo-div">
            <div className="row all-ex-row">
                <LeftNavbar currentPage={currentPage} />
                <div className="col-md-9 col-lg-10 all-wo-main-col">
                    <Search 
                        handleChange={props.handleChange}
                        handleSearch={props.handleSearch}
                        search={props.search}
                        handleEnter={props.handleEnter}
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