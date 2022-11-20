import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tab } from '@headlessui/react'
import { RiSettings3Fill } from "react-icons/ri"
import AccountDetails from "./Account/AccountDetails"
import GeneralSettings from "./Account/GeneralSettings"
import ContentTitle from "./Common/ContentTitle"

const AccountSettings = ({ user, logout, updateEmailAddress }) => {

    const navigate = useNavigate()



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
        <>
            {user ?
                <div className="flex flex-col gap-5 w-full">

                    <ContentTitle title="Account Settings" imageIcon={<RiSettings3Fill size={25} />} />
                    <GeneralSettings user={user} updateEmailAddress={updateEmailAddress} />
                    <AccountDetails user={user} />




                    {/* <button onClick={handleLogout} className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center">Logout</button> */}
                </div>

                :
                <></>
            }
        </>
    )
}

export default AccountSettings