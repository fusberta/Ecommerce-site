import { Link } from "react-router-dom";

export function Login() {
    return (
        <>
            <section className="relative py-10 px-5">
                <div className="max-w-2xl mx-auto border-2 border-double rounded-xl p-9 bg-white drop-shadow-lg">
                    <form action="" className="flex flex-col text-stone-700">
                        <h1 className="text-4xl font-bold mb-7">Sign In</h1>
                        <h3 className="text-xl mb-2">Email address or username:</h3>
                        <input type="text" required className="py-2 px-4 mb-4 text-base border border-gray-300 rounded-md" />
                        <h3 className="text-xl mb-2">Password:</h3>
                        <input type="password" required className="py-2 px-4 mb-8 text-base border border-gray-300 rounded-md" />
                        <div className="flex justify-between items-center">
                            <button className="px-10 py-3 text-xl font-semibold w-max border border-zinc-800 rounded-md text-stone-700 transition-all duration-300 hover:bg-zinc-800 hover:text-zinc-100">
                                Sign In
                            </button>
                            <div className="flex flex-col items-end">
                                <p className="font-normal">No registered account?</p>
                                <Link to={{pathname: '/register'}} className="text-right font-semibold text-lg text-emerald-600 hover:underline">Register</Link>
                            </div>  
                        </div>
                        
                    </form>
                </div>
            </section>
        </>
    )
}