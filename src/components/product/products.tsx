import { product } from "../../assets/data/data";
import { ProductCard } from "./product-card";

export function Products() {
    return (
        <>
            <section className="mt-12 pb-48 mx-auto w-full max-w-6xl">
                <div className="grid lg:grid-cols-4 lg:gap-6 sm:grid-cols-2 sm:gap-4 grid-cols-1 gap-3">
                    {product.map((item) => (
                        <ProductCard key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price} category={item.category} />
                    ))}
                </div>
            </section>
        </>
    )
}