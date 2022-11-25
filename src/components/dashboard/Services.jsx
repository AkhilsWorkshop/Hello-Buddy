import { MdDesignServices } from "react-icons/md"
import { UserAuth } from "../../server/AuthContext"
import MessageAlert from "../common/MessageAlert"
import ContentTitle from "./ContentTitle"
import { Disclosure } from '@headlessui/react'
import { useState } from 'react'

const Services = () => {

    const tableHeader = ["Name", "Type", "Price", "Subscribed on", "Due"]

    const { user, userData, addServiceData } = UserAuth();

    const [serviceName, setServiceName] = useState("")
    const [serviceType, setServiceType] = useState("Monthly")
    const [servicePrice, setServicePrice] = useState("")
    const [serviceStart, setServiceStart] = useState("")
    const [serviceEnd, setServiceEnd] = useState("")

    const sendToDB = async (e) => {

        e.preventDefault()
        try {
            await addServiceData(user.uid, serviceName, serviceType, servicePrice, serviceStart, serviceEnd);
            console.log("success")
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>
            <div className="flex flex-col gap-5 w-full -z-10">

                <ContentTitle title="Services" imageIcon={<MdDesignServices size={25} />} />

                <div className="flex flex-col gap-7 w-full bg-[#ffffff] shadow-lg rounded-lg p-10">

                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-fourth uppercase bg-primary">
                                <tr>
                                    {tableHeader.map((eachItem, index) => (
                                        <th key={index} scope="col" className="py-3 px-6">{eachItem}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Netflix
                                    </th>
                                    <td className="py-4 px-6">
                                        Monthly
                                    </td>
                                    <td className="py-4 px-6">
                                        $12
                                    </td>
                                    <td className="py-4 px-6">
                                        11/21/2022
                                    </td>
                                    <td className="py-4 px-6">
                                        12/21/2022
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Disclosure>
                        <Disclosure.Button className="py-2">
                            <p className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Add Service</p>
                        </Disclosure.Button>
                        <Disclosure.Panel className="">
                            <form className="flex flex-col bg-fourth p-5 rounded-md shadow-md" onSubmit={sendToDB} >
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium">Subscription Name</label>
                                    <input type="text" className="shadow-sm bg-[#ffffff] text-sm rounded-sm block w-full p-2.5 py-3" placeholder="Netflix" onChange={(e) => setServiceName(e.target.value)} required />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium">Subscription Type</label>
                                    <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="shadow-sm bg-[#ffffff] text-sm rounded-sm block w-full p-2.5 py-3" required>
                                        <option value="Monthly">Monthly</option>
                                        <option value="3 - Months">3 - Months</option>
                                        <option value="6 - Months">6 - Months</option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium">Subscription Price ({userData.currencyType})</label>
                                    <input type="number" className="shadow-sm bg-[#ffffff] text-sm rounded-sm block w-full p-2.5 py-3" placeholder="20" onChange={(e) => setServicePrice(e.target.value)} required />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium">Subscription Start Date</label>
                                    <input type="text" className="shadow-sm bg-[#ffffff] text-sm rounded-sm block w-full p-2.5 py-3" placeholder="11/20/2022" onChange={(e) => setServiceStart(e.target.value)} required />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium">Subscription End Date</label>
                                    <input type="text" className="shadow-sm bg-[#ffffff] text-sm rounded-sm block w-full p-2.5 py-3" placeholder="12/20/2022" onChange={(e) => setServiceEnd(e.target.value)} required />
                                </div>
                                <button type="submit" className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center">Add</button>
                            </form>
                        </Disclosure.Panel>
                    </Disclosure>

                </div>

            </div>
        </>
    )
}

export default Services
