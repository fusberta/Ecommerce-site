import image from "../assets/images/4140048.png"

export function Account() {
    return (
        <>
            <section className="mt-16">
                <div className="p-12 w-2/3 m-auto max-w-4xl mx-auto border-2 border-double rounded-xl bg-white drop-shadow-lg">
                    <h1 className="text-3xl font-semibold">Account Information</h1>
                    <div className="mt-14 flex flex-start">
                        <div className="relative">
                            <div className="ml-16">
                                <input type="file" accept="image/*" src={image} className="w-40 h-40 relative z-10 opacity-0 cursor-pointer" />
                                <img src={image} alt="preview" className="absolute top-0 left-0 w-40 h-40 rounded-full cursor-pointer" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                            <h3 className="text-lg">Email address:</h3>
                            <input type="email" placeholder="Change email" className="py-2 px-4 h-max text-base border border-gray-300 rounded-md" />
                            <h3 className="text-lg">Phone number:</h3>
                            <input type="email" placeholder="Change phone number" className="py-2 px-4 h-max text-base border border-gray-300 rounded-md" />
                            <h3 className="text-lg mt-2">Password:</h3>
                            <div className=""></div>
                            <input type="password" placeholder="New password" className="py-2 px-4 h-max mr-5 text-base border border-gray-300 rounded-md" />
                            <input type="password" placeholder="Confirm new password" className="py-2 px-4 h-max text-base border border-gray-300 rounded-md" />
                            <div className=""></div>
                            <button className="bg-emerald-600 text-base text-zinc-100 py-3 px-4 mt-3 rounded-md w-full justify-self-end border border-emerald-600 hover:bg-zinc-100 hover:text-emerald-600 transition-all duration-300">Сохранить изменения</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}