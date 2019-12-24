import React from 'react'

const ShowWorkout = ({ workouts }) => {
    return (
        <div className="row">
            {workouts.map(workout => (
                <div key={workout._id}  className="col-lg-3 col-sm-6">
                    <div className="card wo-card">
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                        <div className="card-body">
                            <h5 className="card-title">{workout.name}</h5>
                            <p className="card-text">Description of workout</p>
                            <a href={`/workout/${workout._id}`} class="btn wo-sm-btn">See More</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowWorkout