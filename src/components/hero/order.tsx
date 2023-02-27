import { order } from "../../assets/data/data";

export function Order() {
    return (
        <>
            <section className="mt-10 mx-auto w-full max-w-6xl">
                <div className="px-12 py-8 bg-white rounded-2xl border-2 border-double drop-shadow-sm grid grid-cols-1 grid-rows-4 md:gap-7 gap-4 sm:grid-cols-2 sm:grid-rows-2">
                    {order.map((item) => (
                        <div className="flex items-center justify-center" key={item.id}>
                            <div className="">
                                <h1 className="w-12 h-12 leading-10 rounded-full bg-rose-400 text-center mr-5 text-3xl font-semibold cursor-default transition-all duration-200 text-black hover:scale-125">
                                    {item.id}
                                </h1>
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-lg font-extralight">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}