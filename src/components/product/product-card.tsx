import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai"

interface IProduct {
    key: number
    id: number
    cover: string
    name: string
    price: number
    category: string
}

export function ProductCard(props: IProduct) {
    return (
        <>
            <div className='flex flex-col p-5 bg-white rounded-xl border-2 border-double drop-shadow-sm hover:opacity-90'>
                <div className=''>
                    <Link to={{pathname: '/'}}>
                        <img src={props.cover} alt={props.name} />
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-between h-full'>
                    <h3 className="text-lg font-semibold text-red-600 mb-1">${props.price}</h3>
                    <p className="text-center font-semibold text-zinc-900 mb-2">{props.name}</p>
                    <p className="text-center text-sm font-light bg-gray-200 rounded-full px-3 py-0.5 text-zinc-900 mb-3 mt-auto">{props.category}</p>
                    <button className="text-green-700 mt-auto">
                        <AiOutlinePlusCircle size={35} />
                    </button>
                </div>
            </div>
        </>
    )
}