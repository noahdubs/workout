import React from 'react'

const Form = props => {
    return (
        <form action="/api/login" method="POST">
            <h2 className="form-name">Login</h2>
            <div className="form-group">
                <label>Username</label>
                <div className="input-group">
                    <input 
                        name="username" 
                        type="text" 
                        onChange={props.handleChange} 
                        className="form-control form-box" 
                    />
                </div>
            </div>
            <div className="form-group">
                <label>Password</label>
                <div className="input-group">
                    <input 
                        type="password" 
                        name="password" 
                        onChange={props.handleChange} 
                        className="form-control form-box"
                    />
                </div>
            </div>
            <button className="btn form-button workout-btn">Login 
                <i className="fas fa-sign-in-alt"></i>
            </button>
        </form>
    )
}

export default Form 