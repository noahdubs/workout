import React from 'react'
import LoggedIn from './LoggedIn'

class Header extends React.Component {
    state = {}

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-md navbar-dark nav-custom">
                <a href="/" className="navbar-brand brand-name">Workout App <i class="fas fa-running"></i></a>
                <button className="navbar-toggler border" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggler"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav navbar-right l-space">
                        <li className="nav-item">
                            <a href="/workout" className="nav-link link-nav"><i class="fas fa-dumbbell icon"></i> Workout</a>
                        </li>
                    </ul>
                    <LoggedIn />
                </div>
            </nav>
        )
    }
    
}

export default Header 