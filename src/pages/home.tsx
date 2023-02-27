// import { Banner } from "../components/hero/banner";

import { Category } from "../components/category/category";
import { Order } from "../components/hero/order";
import { Products } from "../components/product/products";
import { Search } from "../components/search";

export function Home() {

    return (
        <div className="w-full px-5">
            <Order />
            <Category />
            <Search />
            <Products />
        </div>
    )
}