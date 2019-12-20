import React from 'react'

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

    handleSubmit = event => {
        event.preventDefault();
        let user = JSON.stringify(this.state);
        // preserve newlines, etc - use valid JSON
        user = user.replace(/\\n/g, "\\n")  
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f");
        // remove non-printable and other non-valid JSON chars
        user = user.replace(/[\u0000-\u0019]+/g,""); 
        // var o = JSON.parse(s);

        fetch("http://localhost:5000/api/register", {
            method: "POST",
            body: user,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(response => console.log("success:", JSON.stringify(response)))
        .catch(error => console.log("error:", error));
    }
    
    render() {
        return (
            <div className="row form-div">
                <div className="col-md-3"></div>
                <div className="col-md-6 form-content">
                    <form action="/api/register" method="POST"> 
                        <h2 className="form-name">Register</h2>
                        <div className="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" name="name" value={this.state.name} placeholder="name" onChange={this.handleChange} className="form-control form-box"/>
                        </div>
                        <div className="form-group">
                            <label for="Username">Username</label>
                            <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleChange} className="form-control form-box"  />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleChange} className="form-control form-box" />
                        </div>
                        <button className="btn form-button">Register <i class="fas fa-user-plus icon"></i></button>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default Register 