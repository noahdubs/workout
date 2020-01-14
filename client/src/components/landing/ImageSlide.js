import React from 'react'

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="image-slide" style={styles}>
            <div className="row image-center">
                <div className="col-md-3"></div>
                <div className="col-md-6 content">
                    <h1 className="landing-heading">Welcome To Total Fitness</h1>
                    <a href="/workout" className="btn landing-btn workout-btn">View All Workouts</a>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default ImageSlide