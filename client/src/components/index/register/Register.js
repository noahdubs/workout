import React from 'react'
import Container from './Container'
import Navbar from '../../partials/navbar/Navbar'

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
        const current = "Register"
        return (
            <div className="main-div">
                <Navbar current={current} />
                <Container 
                    handleChange={this.handleChange}
                    name={this.state.name}
                    username={this.state.username}
                    password={this.state.password}
                />
            </div>
            
        )
    }
}

export default Register 