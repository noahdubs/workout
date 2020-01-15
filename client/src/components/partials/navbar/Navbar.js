import React from 'react'
import Content from './Content'

const Navbar = ({ current })  => {
    let styles = {}
    if(current === "Landing"){
        styles.boxShadow = "none"
    } else {
        styles.boxShadow = " 0 8px 8px -5px #757575"
    }
    return (
        <Content styles={styles}/>
    )
}

export default Navbar 