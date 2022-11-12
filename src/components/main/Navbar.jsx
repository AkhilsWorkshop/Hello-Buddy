import { Squeeze as Hamburger } from 'hamburger-react'
import { useState } from "react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        {
            id: 1,
            name: "About us",
        },
        {
            id: 2,
            name: "Features",
        },
        {
            id: 3,
            name: "Login",
        }
    ]

    return (
        <>
            <div className="absolute top-0 w-full h-20 bg-secondary text-fourth shadow-2xl shadow-primary">

                <div className="relative flex items-center justify-between h-full px-10">

                    <h1 className="text-2xl sm:text-4xl font-bold">HELLO BUDDY!</h1>

                    <div className="hidden md:flex gap-8 items-center">
                        {menuItems.map((eachItem, index) => (
                            <button key={index} className="flex hover:text-third duration-300 transition-all">{eachItem.name}</button>
                        ))}
                        <button className="border-2 border-third rounded-lg p-2 px-3 hover:bg-third hover:text-secondary font-semibold duration-300 transition-all">Create an Account</button>
                    </div>

                    <div className="flex md:hidden">
                        <Hamburger toggled={isOpen} toggle={setIsOpen} />
                    </div>

                    <div className={`absolute z-40 h-auto w-full top-20 left-0 duration-300 transition-all  ${isOpen ? "flex" : "top-[-300px]"}`}>
                        <div className="flex md:hidden flex-col w-full bg-secondary text-fourth">
                            <div>
                                {menuItems.map((eachItem, index) => (
                                    <div key={index} className="border border-t-0 border-x-0 border-primary px-10 py-5">
                                        <button className="text-xl hover:text-third duration-300 transition-all">{eachItem.name}</button>
                                    </div>
                                ))}
                            </div>
                            <button className="mx-10 my-5 gap-1 border-2 text-xl border-third rounded-lg p-3 hover:bg-third hover:text-secondary font-semibold duration-300 transition-all">Create an Account</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
