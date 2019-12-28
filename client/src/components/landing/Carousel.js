import React from 'react'
import ImageSlide from './ImageSlide'
import Arrow from './Arrow'
import imgUrls from './imgUrls'

class Carousel extends React.Component {
    state = {
        currentImageIndex: 0
    }
    
    componentDidMount = () => {
        const interval = setInterval(this.next, 5000);
        this.setState({currentImageIndex:interval})
    }
    componentWillUnmount = () => {
        clearInterval(this.state.currentImageIndex)
    }
    next = () => {
        const index = this.state.currentImageIndex
        if(index === 2){
            this.setState({currentImageIndex:0})
        } else {
            this.setState(prev => {
                return {
                    currentImageIndex: prev.currentImageIndex + 1
                }
            })
        }
        
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
                />

                <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

                <Arrow 
                    direction="right"
                    clickFunction={ this.nextSlide }
                />
            </div>
        )
    }
}

export default Carousel 