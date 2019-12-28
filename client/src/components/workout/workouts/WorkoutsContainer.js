import React from 'react'
import Search from './Search'
import ShowWorkouts from './ShowWorkouts'

const WorkoutsContainer = props => {
    return (
        <div className="container wos-container">
            <Search 
                value={props.value}
                onChange={props.onChange}
                onClick={props.onClick}
            />
            <ShowWorkouts workouts={props.workouts} />
        </div>
    )
}

export default WorkoutsContainer