import React from 'react'
import ImageSlide from './ImageSlide'
import Arrow from './Arrow'
import imgUrls from './imgUrls'

class Carousel extends React.Component {
    state = {
        currentImageIndex: 0
    }

    previousSlide = () => {
        const lastIndex = imgUrls.length -1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === 0
        const index = shouldResetIndex ? lastIndex : currentImageIndex -1

        this.setState({currentImageIndex: index})
    }

    nextSlide = () => {
        const lastIndex = imgUrls.length-1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === lastIndex
        const index = shouldResetIndex ? 0 : currentImageIndex + 1

        this.setState({currentImageIndex: index})
    }

    render() {
        return (
            <div className="carousel landing-div">
                <Arrow 
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;" />

                <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

                <Arrow 
                    direction="right"
                    clickFunction={ this.nextSlide }
                    glyph="&#9654;"
                />
            </div>
        )
    }
}

export default Carousel 