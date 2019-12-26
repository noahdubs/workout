import React from 'react'
import Loading from './Loading'
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
        const profileOwner = this.props.profileOwner
        if(!user){
            return (
                <div></div>
        )
        }else if(user._id === profileOwner){
            return (
                <div className="col-md-4">
                    <a href="/workout/new" className="btn btn-primary">Add a new workout</a>
                    <a href={`/users/${user._id}/edit`} className="btn btn-warning">Edit profile</a>
                    <form action={`/api/users/${user._id}?_method=DELETE`} method="POST">
                        <button className="btn btn-danger">Delete profile</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
}

export default LoggedIn 