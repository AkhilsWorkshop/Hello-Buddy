import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import loginImg from "../../assets/images/user/loginImg.svg"
import { useAuth } from "../../server/user/contexts/AuthContext"

const Login = () => {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setError('');
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }

        setLoading(false)

    }

    return (
        <div className="bg-fourth">
            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:p-10 mt-20">

                <div className="hidden lg:flex flex-col justify-center items-center gap-7 flex-1 px-20">
                    <p className="text-[2rem] md:text-[2.5rem] font-bold leading-tight">Glad you're back!</p>
                    <p className="">Resuming your stress-free financial journey.</p>
                    <div className="flex-1 w-2/3">
                        <img alt="heroImage" src={loginImg} />
                    </div>
                </div>

                <div className="flex flex-col gap-7 w-full lg:w-1/3 bg-[#ffffff] shadow-lg rounded-lg p-10">

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="font-bold text-2xl">Welcome back user,</p>
                        <p className="text-sm text-center">Login to your existing account and start saving money!</p>
                    </div>
                    {error && <p>{error}</p>}
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3" placeholder="name@example.com" ref={emailRef} required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                            <input type="password" id="password" className="shadow-sm bg-fourth text-sm rounded-sm block w-full p-2.5 py-3" ref={passwordRef} required />
                        </div>
                        <button type="submit" className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center">Login</button>
                    </form>
                    <div className="flex gap-2 justify-center items-center">
                        <p className="font-bold text-lg">New to our app?</p>
                        <Link to="/register" className="text-sm underline">Create an Account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login