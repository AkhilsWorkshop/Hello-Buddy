import React from 'react'
import Footer from '../components/main/Footer'
import Navbar from '../components/main/Navbar'
import Dashboard from '../components/user/Dashboard'

const DashBoardPage = () => {
    return (
        <>
            <Navbar />
            <Dashboard />
            <Footer />
        </>
    )
}

export default DashBoardPage