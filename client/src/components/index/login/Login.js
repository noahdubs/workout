import React from 'react'
import Container from './Container'
import Navbar from '../../partials/navbar/Navbar'

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
        const current = "Login"
        return (
            <div className="main-div">
                <Navbar current={current} />
                <Container handleChange={this.handleChange} />
            </div>
        )
    }
}

export default Login 