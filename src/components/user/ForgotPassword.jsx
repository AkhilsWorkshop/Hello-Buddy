import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../server/context/AuthContext';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const { resetPassword } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            await resetPassword(email);
            setMessage("Check you email for instructions!");
        } catch (e) {
            setMessage(e.message);
            console.log(e.message);
        }
    };

    return (
        <div className="bg-fourth">
            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:p-10 mt-20">

                <div className="flex flex-col gap-7 w-full lg:w-1/3 bg-[#ffffff] shadow-lg rounded-lg p-10">

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="font-bold text-2xl">Forgot Password?</p>
                        <p className="text-sm text-center">Don't worry, it's easy to reset it! </p>
                    </div>

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        {message
                            ?
                            <div className="mb-6">
                                <p className="border-2 rounded-md border-[#198000] bg-[#198000]/40 px-5 py-5 text-center">{message}</p>
                            </div>
                            :
                            <button type="submit" className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center">Reset Password</button>
                        }

                    </form>

                    <div className="flex gap-2 justify-center items-center">
                        <Link to="/login" className="font-semibold text-lg text-third">Login</Link>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <p className="font-bold text-lg">New to our app?</p>
                        <Link to="/register" className="text-sm underline">Create an Account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword