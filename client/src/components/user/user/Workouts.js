import React from 'react'

const Workouts = ({ user }) => {
    return (
        <div className="row user-wos-row">
            {user.workouts.map(workout => (
                <div key={workout._id}  className="col-lg-3 col-md-4 col-sm-6">
                    <div  className="card wo-card">
                        <a href={`/workout/${workout._id}`}>
                            <img className="card-img-top all-wo-img" 
                                src={workout.picture.url} 
                                alt={workout.name} 
                            />
                        </a>
                        <div className="card-body">
                            <a className="all-wo-title-link" href={`/workout/${workout._id}`}>
                                <h5 className="card-title">
                                    <i class="fas fa-dumbbell all-wo-icon"></i>
                                    {workout.name}
                                </h5>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    )
}

export default Workouts