import React from 'react'
import { Link } from "react-router-dom";

class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        fetch("/api/users")
            .then(res => res.json())
            .then(users => {
                this.setState({users})
            })
    }

    render() {
        const users = this.state.users
        console.log(users);
        return (
            <div>
                <h1>Users page</h1>
                {users.map(user => (
                    <p key={user._id}>
                        <Link to={`/users/${user._id}`}> {user.name}: {user.username}</Link>
                    </p>
                ))}
            </div>
        )
    }
}

export default Users