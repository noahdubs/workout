import React from 'react'
import Container from './Container'
import Loading from './Loading'
import Exercises from './Exercises'
import Workouts from './Workouts'

class User extends React.Component {
    state = {
        user: {},
        current: <Workouts />,
        currentStr: "Workouts"
    }

    componentDidMount = () => {
        fetch(`/api/users/${this.props.match.params.userId}`)
            .then(res => res.json())
            .then(user => {
                this.setState({
                    user,
                    current: <Workouts workouts={user.workouts} user={user} />
                })
            })
    }

    handleClick = event => {
        const clicked = event.target.attributes.name.value
        console.log(clicked)
        let newComponent = <Workouts user={this.state.user} />
        if(clicked === "Exercises"){
            newComponent = <Exercises user={this.state.user} />
        }
        this.setState({
            current:newComponent,
            currentStr:clicked
        })
    }

    render() {
        const user = this.state.user;
        const workouts = user.workouts;
        console.log(this.state)
        if(!workouts) {
            return (
                <Loading />
            )
        } else {
            return (
                <Container 
                    user={user}
                    current={this.state.current}
                    currentStr={this.state.currentStr}
                    handleClick={this.handleClick}
                />
            )
        }
        
    }
}

export default User 