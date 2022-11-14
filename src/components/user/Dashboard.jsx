import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../server/user/contexts/AuthContext"

const Dashboard = () => {
    const { currentUser, logout } = useAuth()

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleLogout = async () => {
        setError('')

        try {
            await logout()
            navigate("/")
            console.log("signed out")
        }
        catch {
            setError('failed')
        }
    }

    return (
        <div className="mt-32">
            <p>{currentUser.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard