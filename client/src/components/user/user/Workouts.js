import React from 'react'

const Workouts = ({ workouts, user }) => {
    return (
        <div className="all-user-wos">
            <h3>Workouts made by {user.name}</h3>
            <div className="row ">
                {workouts.map(workout => (
                    <div key={workout._id}  className="col-lg-3 col-sm-6">
                        <div className="card wo-card">
                            <img class="card-img-top" src={workout.picture.url} alt={workout.name} />
                            <div className="card-body">
                                <h5 className="card-title">{workout.name}</h5>
                                <a href={`/workout/${workout._id}`} class="btn wo-sm-btn">See More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Workouts