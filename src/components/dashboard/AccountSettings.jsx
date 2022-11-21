import { useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai"
import { RiSettings3Fill } from "react-icons/ri"
import { UserAuth } from "../../server/context/AuthContext"
import MessageAlert from "../common/MessageAlert";
import ContentTitle from "./ContentTitle"

const AccountSettings = () => {

    const { user, userData, updateEmailAddress, verifyEmail } = UserAuth()

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            await updateEmailAddress(email);
            setMessage("Updated Successfully");
        } catch (e) {
            setMessage(e.message);
            console.log(e.message);
        }
    };

    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            await verifyEmail();
            console.log("sent");
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>
            {user ?
                <div className="flex flex-col gap-5 w-full">

                    <MessageAlert alertName="Verification mail sent" alertMessage="Check your mail to confirm your account" alertType="success" />

                    <ContentTitle title="Account Settings" imageIcon={<RiSettings3Fill size={25} />} />

                    <div className="flex flex-col gap-7 w-full bg-[#ffffff] shadow-lg rounded-lg p-10">
                        <form className="flex flex-col gap-2" onSubmit={handleChange}>
                            <label htmlFor="email" className="text-sm font-semibold">Email</label>
                            <div className="flex gap-2">
                                <input type="email" id="email" className="shadow-sm bg-fourth text-sm rounded-md grow md:grow-0 lg:w-1/3 p-2.5 py-3" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} required />
                                {user.emailVerified === false ? <button onClick={handleVerify} className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Verify</button> : <button onClick={handleVerify} className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Change</button>}
                            </div>
                            <div className="flex gap-1 items-center text-sm">
                                <p>Account Status: </p>
                                {user.emailVerified === false ?
                                    <div className="flex items-center gap-1 text-[#ff3131]">
                                        <p>Not verified</p>
                                        <AiFillCloseCircle size={20} />
                                    </div>
                                    :
                                    <div className="flex items-center gap-1 text-[#4ba634]">
                                        <p>Verified</p>
                                        <AiFillCheckCircle size={20} />
                                    </div>
                                }
                            </div>
                        </form>

                        <form className="flex flex-col gap-2" onSubmit={handleChange}>
                            <label htmlFor="name" className="text-sm font-semibold">Full Name</label>
                            <div className="flex gap-2">
                                <input type="text" id="name" className="shadow-sm bg-fourth text-sm rounded-md grow md:grow-0 lg:w-1/3 p-2.5 py-3" placeholder={userData.userName} onChange={(e) => setEmail(e.target.value)} required />
                                <button className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Change</button>
                            </div>
                        </form>

                        <form className="flex flex-col gap-2" onSubmit={handleChange}>
                            <label htmlFor="name" className="text-sm font-semibold">Password</label>
                            <div className="flex gap-2">
                                <input type="text" id="name" className="shadow-sm bg-fourth text-sm rounded-md grow md:grow-0 lg:w-1/3 p-2.5 py-3" placeholder={user.displayName} onChange={(e) => setEmail(e.target.value)} required />
                                <button className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Change</button>
                            </div>
                        </form>

                    </div>

                    <div className="flex flex-col gap-7 flex-grow w-full bg-[#ffffff] shadow-lg rounded-lg p-10">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Created On</p>
                            <p className="shadow-sm bg-fourth text-sm rounded-md w-fit p-2.5 py-3"> {user.metadata?.creationTime.slice(0, 25)}</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Last Sign In</p>
                            <p className="shadow-sm bg-fourth text-sm rounded-md w-fit p-2.5 py-3"> {user.metadata?.lastSignInTime.slice(0, 25)}</p>
                        </div>
                    </div>

                </div>

                :
                <></>
            }
        </>
    )
}

export default AccountSettings