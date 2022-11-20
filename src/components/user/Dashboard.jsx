
import { UserAuth } from "../../server/context/AuthContext"
import AccountSettings from "../dashboard/AccountSettings"
import Welcome from "../dashboard/Welcome"

const Dashboard = () => {

    const { user, logout, updateEmailAddress } = UserAuth()


    console.log(user)

    return (
        <div className="bg-fourth">

            <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 p-8 md:p-10 mt-20 border-2">


                <Welcome user={user} />

                <div className="flex w-full gap-10">
                    <AccountSettings user={user} logout={logout} updateEmailAddress={updateEmailAddress} />
                    <AccountSettings user={user} logout={logout} updateEmailAddress={updateEmailAddress} />
                </div>
            </div>

        </div>
    )
}

export default Dashboard