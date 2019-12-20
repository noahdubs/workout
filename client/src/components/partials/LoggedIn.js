import React from 'react'

class LoggedIn extends React.Component {
    state = {}

    componentDidMount = () => {
        fetch("/api/check")
            .then(res => res.json())
            .then(user => {
                this.setState({user})
            })
    }

    logout = event => {
        console.log("clicked log out")
        fetch("/api/logout")
            .then(res => res.json())
            .then(user => {
                this.setState({user})
            })
    }

    render() {
        const user = this.state.user;
        if(user) {
            return (
                <ul className="navbar-nav navbar-right r-padding">
                    <li className="nav-item">
                        <a href={`/users/${user._id}`} className="nav-link link-nav"><i class="fas fa-user icon"></i> Profile</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" onClick={this.logout} className="nav-link link-nav"><i class="fas fa-sign-out-alt icon"></i> Logout</a>
                    </li>
                </ul>
                
            )
        } else {
            return (
                <ul className="navbar-nav navbar-right r-padding">
                    <li className="nav-item">
                        <a href="/login" className="nav-link link-nav"><i class="fas fa-sign-in-alt icon"></i> Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="/register" className="nav-link link-nav"><i class="fas fa-user-plus icon"></i> Register</a>
                    </li>
                </ul>
                
            )
            
        }
    }
}

export default LoggedIn