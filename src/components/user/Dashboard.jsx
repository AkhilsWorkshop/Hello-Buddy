import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../server/context/AuthContext"

const Dashboard = () => {

    const { user, logout } = UserAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogout = async () => {
        try {
            await logout()
            navigate("/")
            console.log("Logged out")
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className="bg-gradient-to-br from-fourth via-third/40 to-fourth">

            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 p-8 md:p-10 mt-20">

                <div className="flex flex-col gap-7 w-full lg:w-1/3 bg-[#ffffff] shadow-lg rounded-lg p-10">

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="font-bold text-2xl">Welcome back user,</p>
                        <p className="text-sm text-center">Add a service to start tracking</p>
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-6">
                            <p className="font-bold text-2xl">Account</p>
                            <p className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3">Name</p>
                            <p className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3">Email ID: {user && user.email}</p>
                        </div>
                        <button onClick={handleLogout} className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center">Logout</button>
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-6">
                            <p className="font-bold text-2xl">Edit Account</p>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email address</label>
                            <input type="email" id="email" className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                            <input type="password" id="password" className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3" onChange={(e) => setPassword(e.target.value)} required />

                        </div>
                        <button onClick={handleLogout} className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center">Save changes</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard