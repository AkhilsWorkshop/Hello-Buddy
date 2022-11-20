import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AccountSettings = ({ user, logout, updateEmailAddress }) => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogout = async () => {
        try {
            await logout()
            navigate("/")
            console.log("Logged out")
        } catch (e) {
            console.log(e.message)
        }
    }

    const handleChange = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            await updateEmailAddress(email);
            setMessage("Updated Successfully");
        } catch (e) {
            setMessage(e.message);
            console.log(e.message);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-7 w-full lg:w-1/3 bg-[#ffffff] shadow-lg rounded-lg p-10">

                {user ?
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <p className="font-bold text-2xl">Account</p>
                            <p className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3">Name</p>
                            <form className="flex flex-col" onSubmit={handleChange}>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                                    <input type="email" id="email" className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </form>
                            <p className={`shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3 ${user.emailVerified === false ? "text-[#ff3131]" : "text-[#65e046]"}`}>Account Status: {user.emailVerified === false ? "Not Verified" : "Verified"}</p>
                            <p className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3">Account Creation: {user.metadata?.creationTime}</p>
                            <p className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3">Last Sign In: {user.metadata?.lastSignInTime.slice(0, 16)}</p>
                        </div>
                        <button onClick={handleLogout} className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center">Logout</button>
                    </div>

                    :
                    <></>
                }
                <div className="flex flex-col">
                    <div className="mb-6">
                        <p className="font-bold text-2xl">Edit Account</p>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email address</label>
                        <input type="email" id="email" className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                        <input type="password" id="password" className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3" onChange={(e) => setPassword(e.target.value)} required />

                    </div>
                    <button onClick={handleChange} className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center">Save changes</button>
                </div>
            </div>
        </>
    )
}

export default AccountSettings