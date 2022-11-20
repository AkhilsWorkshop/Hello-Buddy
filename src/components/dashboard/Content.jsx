import { Tab } from "@headlessui/react"
import { UserAuth } from "../../server/context/AuthContext"
import AccountSettings from "./AccountSettings"

const Content = () => {

    const { user, logout, updateEmailAddress } = UserAuth()

    return (
        <Tab.Panels className="flex flex-col gap-7 flex-grow w-full lg:w-1/3">
            <Tab.Panel>Dashboard Settings</Tab.Panel>
            <Tab.Panel>Services </Tab.Panel>
            <Tab.Panel>Notification</Tab.Panel>
            <Tab.Panel><AccountSettings user={user} logout={logout} updateEmailAddress={updateEmailAddress} /></Tab.Panel>
        </Tab.Panels>
    )
}

export default Content