import React from 'react'

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
            <div className="row form-div">
                <div className="col-md-3"></div>
                <div className="col-md-6 form-content">
                    <form action="/api/login" method="POST">
                        <h2 className="form-name">Login</h2>
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input name="username" type="text" onChange={this.handleChange} className="form-control form-box" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" onChange={this.handleChange} className="form-control form-box" />
                        </div>
                        <button class="btn form-button">Login <i class="fas fa-sign-in-alt"></i></button>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default Login 