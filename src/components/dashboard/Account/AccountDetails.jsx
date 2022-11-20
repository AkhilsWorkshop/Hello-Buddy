
const AccountDetails = ({ user }) => {
    return (
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
    )
}

export default AccountDetails