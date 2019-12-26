import React from 'react'

const ShowWorkout = ({ workouts }) => {
    return (
        <div className="row">
            {workouts.map(workout => (
                <div key={workout._id}  className="col-lg-3 col-sm-6">
                    <div className="card wo-card">
                        <img class="card-img-top" src={workout.picture.url}/>
                        <div className="card-body">
                            <h5 className="card-title">{workout.name}</h5>
                            <p className="card-text">{workout.description}</p>
                            <a href={`/workout/${workout._id}`} class="btn wo-sm-btn workout-btn">See More</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowWorkout