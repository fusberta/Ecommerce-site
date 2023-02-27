import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

interface CartItem {
    id: number
    cover: string
    name: string
    price: number
    quantity: number
}

export function CartItems(props: CartItem) {

    return (
        <div className="" key={props.id}>
            <div className="flex p-3 items-center">
                <div className="lg:flex mr-3 hidden">
                    <img src={props.cover} alt={props.name} className="w-28 h-28 rounded-md relative mr-5 object-cover" />
                </div>
                <div className="overflow-hidden">
                    <p className="text-ellipsis whitespace-nowrap">{props.name}</p>
                    <label className="text-sm text-gray-600">
                        Unit Price ${props.price}
                    </label>
                    <div className="bg-slate-800 text-white w-max mt-2 rounded-md flex">
                        <button className="p-2 flex items-center hover:bg-slate-700 rounded-l-md">
                            <AiOutlineMinus />
                        </button>
                        <button className="p-2 px-3">
                            {props.quantity}
                        </button>
                        <button className="p-2 flex items-center hover:bg-slate-700 rounded-r-md">
                            <AiOutlinePlus />
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}