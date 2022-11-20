import { Tab } from '@headlessui/react'
import { sideMenu } from '../../data/DashboardData'
import { UserAuth } from '../../server/context/AuthContext';
import { Menu } from '@headlessui/react'

const SideMenu = () => {

    const { isActive, switchTab, user } = UserAuth();

    console.log(isActive)
    return (
        <>
            <div className="flex flex-col gap-7 bg-[#ffffff] shadow-lg rounded-lg p-10">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <p className="font-bold text-xl">Welcome back user,</p>
                    <div className='flex'>
                        <Menu>
                            <Menu.Button className="flex md:hidden">More</Menu.Button>
                            <Menu.Items className="flex md:hidden">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${active && 'bg-blue-500'}`}
                                            href="/account-settings"
                                        >
                                            Account settings
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${active && 'bg-blue-500'}`}
                                            href="/account-settings"
                                        >
                                            Documentation
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Menu>
                        <Tab.List className="hidden md:flex flex-col gap-3 items-start w-full">
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