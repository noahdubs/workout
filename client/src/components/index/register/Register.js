import React from 'react'
import Container from './Container'

class Register extends React.Component {
    state = {
        name: "",
        username: "",
        password: ""
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]:value})
    }
    
    render() {
        return (
            <Container 
                handleChange={this.handleChange}
                name={this.state.name}
                username={this.state.username}
                password={this.state.password}
            />
        )
    }
}

export default Register 