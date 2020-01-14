import React from 'react'
import UserContainer from './UserContainer'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'

const Container = props => {
    return (
        <div className="wo-div">
            <div className="row all-ex-row">
                <LeftNavbar />
                <div className="col-md-10 all-wo-main-col">
                    <UserContainer 
                        user={props.user} 
                        current={props.current} 
                        currentStr={props.currentStr}
                        handleClick={props.handleClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default Container 