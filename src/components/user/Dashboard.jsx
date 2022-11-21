import SideMenu from "../dashboard/SideMenu"
import { Tab } from '@headlessui/react'
import Content from "../dashboard/Content"
import MessageAlert from "../common/MessageAlert"

const Dashboard = () => {


    return (
        <div className="bg-fourth">

            <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 md:p-10 mt-20">

                <Tab.Group defaultIndex={3}>
                    <div className="flex flex-col md:flex-row w-full gap-10">
                        <SideMenu />
                        <Content />
                    </div>
                </Tab.Group>

            </div>

        </div>
    )
}

export default Dashboard