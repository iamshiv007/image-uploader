import React from 'react'
import Products from './Products'
import Students from './Students'
import './Home.css'

const Home = () => {
    return(
        <div className='container'>
            <h1 className='m-auto homeHeading'>Image Uploader</h1>
            <Students/>
            <Products/>
        </div>
    )
}

export default Home