import { Tab } from '@headlessui/react'
import { sideMenu } from '../../data/DashboardData'
import { UserAuth } from '../../server/context/AuthContext';

const SideMenu = () => {

    const { isActive, switchTab, user } = UserAuth();

    console.log(isActive)
    return (
        <>
            <div className="flex flex-col gap-7 w-auto bg-[#ffffff] shadow-lg rounded-lg p-10">
                <div className="flex flex-col gap-2 w-auto justify-center items-center">
                    <p className="font-bold text-xl">Welcome back user,</p>
                    <div className='flex'>
                        <Tab.List className="flex flex-col gap-3 items-start w-full">
                            {sideMenu.map((eachItem, index) => (
                                <Tab key={eachItem.id} className={isActive === index ? `text-third flex items-center justify-center gap-3 selection:border-none` : `flex items-center justify-center gap-3 selection:border-none`} onClick={() => switchTab(index)}><eachItem.icon size={20} />{eachItem.name}</Tab>
                            ))}
                        </Tab.List>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SideMenu