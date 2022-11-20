import { useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai"

const GeneralSettings = ({ user, updateEmailAddress }) => {

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

    return (
        <div className="flex flex-col gap-7 w-full bg-[#ffffff] shadow-lg rounded-lg p-10">
            <form className="flex flex-col gap-2" onSubmit={handleChange}>
                <label htmlFor="email" className="text-sm font-semibold">Email</label>
                <div className="flex gap-2">
                    <input type="email" id="email" className="shadow-sm bg-fourth text-sm rounded-md grow md:grow-0 lg:w-1/3 p-2.5 py-3" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} required />
                    {user.emailVerified === false ? <button className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Verify</button> : <></>}
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
                    <input type="text" id="name" className="shadow-sm bg-fourth text-sm rounded-md grow md:grow-0 lg:w-1/3 p-2.5 py-3" placeholder={user.displayName} onChange={(e) => setEmail(e.target.value)} required />
                    {user.emailVerified === false ? <button className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Change</button> : <></>}
                </div>
            </form>

            <form className="flex flex-col gap-2" onSubmit={handleChange}>
                <label htmlFor="name" className="text-sm font-semibold">Password</label>
                <div className="flex gap-2">
                    <input type="text" id="name" className="shadow-sm bg-fourth text-sm rounded-md grow md:grow-0 lg:w-1/3 p-2.5 py-3" placeholder={user.displayName} onChange={(e) => setEmail(e.target.value)} required />
                    {user.emailVerified === false ? <button className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Change</button> : <></>}
                </div>
            </form>

        </div>
    )
}

export default GeneralSettings
