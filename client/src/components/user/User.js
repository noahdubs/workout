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
                <div>
                    <h1>{user.name}</h1>
                    <h3>{user.username}</h3>
                    {workouts.map(workout => (
                        <li key={workout._id}>
                            <a href={`/workout/${workout._id}`}>{workout.name} by: {workout.author.name}</a>
                        </li>
                    ))}
                </div>
            )
        }
        
    }
}

export default User 