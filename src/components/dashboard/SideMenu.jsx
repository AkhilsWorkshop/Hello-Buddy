import { Tab } from '@headlessui/react'
import { sideMenu } from '../../data/DashboardData'
import { Menu } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../server/AuthContext';

const SideMenu = () => {

    const { isActive, switchTab, userData, logout } = UserAuth();

    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate("/")
        } catch (e) {
            console.log(e.message)
        }
    }

    console.log(isActive)
    return (
        <>
            {userData !== null ?
                <div className="flex flex-col gap-7 justify-center items-center h-fit bg-secondary text-fourth shadow-secondary shadow-md rounded-lg p-10">
                    <p className="font-bold text-xl self-start">Hi {userData.fullName},</p>
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
                    <button onClick={handleLogout} className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center">Logout</button>
                </div>
                :
                <></>
            }
        </>
    )
}

export default SideMenu