import React from 'react'

class LoggedIn extends React.Component {
    state = {}

    componentDidMount = () => {
        fetch("/api/check")
            .then(res => res.json())
            .then(user => {
                this.setState({user})
            })
    }

    render() {
        const user = this.state.user
        const workout = this.props.workout
        if(!user){
            return (
                <div></div>
            )
        } else if(user._id === workout.author.id) {
            return (
                <div className="col-md-2">
                    <a href={`/workout/${workout._id}/edit`} className="btn btn-warning">Edit workout</a>
                    <form action={`/api/workout/${workout._id}?_method="DELETE"`} method="POST">
                        <button className="btn btn-danger">Delete workout</button>
                    </form>
                </div>
            )
            
        } else {
            return (
                <div></div>
            )
        }
        
    }
}

export default LoggedIn 