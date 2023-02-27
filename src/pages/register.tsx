import { Link } from "react-router-dom";


export function Register() {
    return (
        <>
            <section className="relative pt-10 pb-48 px-5">
                <div className="max-w-2xl mx-auto border-2 border-double rounded-xl p-9 bg-white drop-shadow-lg">
                    <form action="" className="flex flex-col text-stone-700">
                        <h1 className="text-4xl font-bold mb-7">Register</h1>
                        <h3 className="text-lg mb-2">Email address: <span className="text-red-600">*</span></h3>
                        <input type="text" placeholder="Enter your email address" required className="py-2 px-4 mb-4 text-base border border-gray-300 rounded-md" />
                        <h3 className="text-lg mb-2">Username: <span className="text-red-600">*</span></h3>
                        <input type="text" placeholder="Choose a name on the site" required className="py-2 px-4 mb-4 text-base border border-gray-300 rounded-md" />
                        <h3 className="text-lg mb-2">Full name: <span className="text-red-600">*</span></h3>
                        <input type="text" placeholder="Enter your first name and last name" required className="py-2 px-4 mb-4 text-base border border-gray-300 rounded-md" />
                        <h3 className="text-lg mb-2">Phone number:</h3>
                        <input type="text" placeholder="Enter your phone number so you don't lose your account" className="py-2 px-4 mb-4 text-base border border-gray-300 rounded-md" />
                        <h3 className="text-lg mb-2">Password: <span className="text-red-600">*</span></h3>
                        <div className="flex justify-between sm:flex-row flex-col sm:gap-6 gap-0">
                            <input type="password" placeholder="Think of a strong password" required className="py-2 px-4 sm:mb-8 mb-5 w-full text-base border border-gray-300 rounded-md" />
                            <input type="password" placeholder="Repeat password" required className="py-2 px-4 mb-8 w-full text-base border border-gray-300 rounded-md" />
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <button className="px-10 py-3 text-xl font-semibold w-max border border-zinc-800 rounded-md text-stone-700 transition-all duration-300 hover:bg-zinc-800 hover:text-zinc-100">
                                Register
                            </button>
                            <div className="flex flex-col items-end">
                                <p className="font-normal">Already have an account?</p>
                                <Link to={{pathname: '/login'}} className="text-right font-semibold text-lg text-emerald-600 hover:underline">Sign In</Link>
                            </div>  
                        </div>
                        
                    </form>
                </div>
            </section>
        </>
    )
}