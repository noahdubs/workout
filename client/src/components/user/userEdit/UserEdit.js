import React from 'react'
import Container from './Container'
import Navbar from '../../partials/navbar/Navbar'

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
        const current = "EditUser"
        return (
            <div className="main-div">
                <Navbar current={current} />
                <Container 
                    user={this.state.user} 
                    handleChange={this.handleChange} 
                />
            </div>
            
        )
    }
}

export default UserEdit 

