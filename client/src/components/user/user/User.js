import React from 'react'
import Container from './Container'
import Loading from './Loading'

class User extends React.Component {
    state = {
        user: {}
    }

    componentDidMount = () => {
        fetch(`/api/users/${this.props.match.params.userId}`)
            .then(res => res.json())
            .then(user => {
                this.setState({
                    user
                })
            })
    }

    render() {
        const user = this.state.user;
        const workouts = user.workouts;
        console.log(user)
        if(!workouts) {
            return (
                <Loading />
            )
        } else {
            return (
                <Container 
                    user={user}
                />
            )
        }
        
    }
}

export default User 