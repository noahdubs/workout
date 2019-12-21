import React from 'react'

class User extends React.Component {
    state = {
        user: {}
    }

    componentDidMount = () => {
        fetch(`/api/users/${this.props.match.params.userId}`)
            .then(res => res.json())
            .then(user => {
                this.setState({user})
            })
    }

    render() {
        console.log(this.state);
        const user = this.state.user;
        const workouts = user.workouts;
        if(!workouts) {
            return (
                <div>
                    <h1>Loading</h1>
                </div>
            )
        } else {
            return (
                <div className="container user-div">
                    <div className="jumbotron user-jumbo">
                        <h1>{user.name}</h1>
                        <h3>{user.username}</h3>
                        <img src={user.picture.url} />
                    </div>
                    <h3>Workouts made by {user.name}</h3>
                    <div className="row user-row">
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
                </div>
            )
        }
        
    }
}

export default User 