import { Link } from "react-router-dom";
import { category } from "../../assets/data/data";

export function Category() {
    return (
        <>
            <section className="mt-12 relative mx-auto w-full max-w-6xl px-12 drop-shadow-sm py-8 bg-white rounded-2xl border-2 border-double">
                <h4 className="text-2xl font-semibold mb-8">Product categories</h4>
                <Link to={{pathname: '/'}}>
                    <div className="flex justify-center items-center flex-wrap sm:justify-between">
                        {category.map((item) => (
                            <div className="" key={item.id}>
                                <div className="p-2 flex items-center flex-col justify-centerx w-52">
                                    <img src={item.cover} alt={item.title} />
                                    <p className="mt-5 text-base font-bold text-center">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Link>
            </section>
        </>
    )
}