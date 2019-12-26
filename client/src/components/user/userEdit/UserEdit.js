import React from 'react'
import Container from './Container'

class UserEdit extends React.Component {
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

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            user:{[name]:value}
        })
    }

    render() {
        return (
            <Container 
                user={this.state.user} 
                handleChange={this.handleChange} 
            />
        )
    }
}

export default UserEdit 

