import React from 'react'
import { BsCheckLg } from "react-icons/bs"
import { ImCross } from "react-icons/im"

const MessageAlert = ({ alertName, alertMessage, alertType }) => {
    return (
        <div className={alertType !== "success" ? `border-[#4ba634] bg-[#cadbc5] border-t-4 rounded-b px-4 py-3 shadow-md absolute` : `border-[#ff3131] bg-[#eac3c3] border-t-4 rounded-b px-4 py-3 shadow-md absolute`}>
            <div className="flex gap-2 justify-center items-center">
                <div className="py-1">
                    {alertType !== "success" ?
                        <BsCheckLg size={20} className="" />
                        :
                        <ImCross size={20} className="" />}
                </div>
                <div>
                    <p className="font-bold">{alertName}</p>
                    <p className="text-sm">{alertMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default MessageAlert
