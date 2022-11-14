import React from 'react'
import Error from '../components/error/Error'
import Footer from '../components/main/Footer'
import Navbar from '../components/main/Navbar'

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <Error />
            <Footer />
        </>
    )
}

export default ErrorPage