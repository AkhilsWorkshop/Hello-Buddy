import React from 'react'

const Welcome = () => {
    return (
        <>
            <div className="flex flex-col gap-7 w-full lg:w-1/3 bg-[#ffffff] shadow-lg rounded-lg p-10">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <p className="font-bold text-2xl">Welcome back user,</p>
                    <p className="text-sm text-center">Add a service to start tracking</p>
                </div>
            </div>
        </>
    )
}

export default Welcome