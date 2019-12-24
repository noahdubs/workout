import React from 'react'
import Carousel from './Carousel'

const Landing = () => {
    const [index, setindex] = React.useState(0)

    // React.useEffect(()=>{
    //     const interval = setInterval(() => {
    //         if(index === 3) {
    //             setindex(0)
    //         } else {
    //             setindex(index + 1)
    //         }
    //     }, 3500)
    //     return () => clearInterval(interval)
    // }, [index])

    return (
        <Carousel />
        
    )
}

export default Landing 