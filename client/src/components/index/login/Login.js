import React from 'react'
import Container from './Container'

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <Container handleChange={this.handleChange} />
        )
    }
}

export default Login 