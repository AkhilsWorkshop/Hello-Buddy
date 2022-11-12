
const Footer = () => {
    return (
        <div className="bg-third">
            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 p-8 md:p-10">

                <div className="flex flex-col flex-1 gap-5 text-secondary">
                    <div className="flex flex-col md:flex-row gap-10 justify-evenly md:gap-5 my-10">
                        <div className="flex flex-col gap-5">
                            <p className="font-bold text-lg">About</p>
                            <ul className="flex flex-col gap-2">
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Our Team</a></li>
                                <li><a href="/">Security</a></li>
                                <li><a href="/">Future Updates</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="font-bold text-lg">Features</p>
                            <ul className="flex flex-col gap-2">
                                <li><a href="/">Manage Services</a></li>
                                <li><a href="/">Add new Tracking</a></li>
                                <li><a href="/">Budgets</a></li>
                                <li><a href="/">Your data</a></li>
                                <li><a href="/">Savings</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="font-bold text-lg">Legal</p>
                            <ul className="flex flex-col gap-2">
                                <li><a href="/">Terms and Conditions</a></li>
                                <li><a href="/">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-lg">&copy; 2022 Hello Buddy</p>
                            <p>All Rights Reserved</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer