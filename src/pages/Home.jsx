import Footer from "../components/main/Footer"
import Hero from "../components/home/Hero"
import SectionOne from "../components/home/SectionOne"
import Users from "../components/home/Users"
import Navbar from "../components/main/Navbar"

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Users />
            <SectionOne />
            <Footer />
        </>
    )
}

export default Home
