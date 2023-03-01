import { RefObject, useEffect, useRef, useState } from "react"
import { BiShoppingBag } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { Overlay } from "../overlay"
import clsx from 'clsx'
import { product } from "../../assets/data/data"
import { CartItems } from "./cart-items"

export function Cart() {
    const [cartOpen, setCartOpen] = useState(false)
    const cartClose = () => {
        setCartOpen(false)
    }   
    
    const cartClasses = clsx('fixed top-0 right-0 flex-col justify-start sm:w-1/2 w-full h-screen p-6 bg-white shadow-xl shadow-neutral-200 z-30', {
        'flex': cartOpen,
        'hidden': !cartOpen,
    });

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(event.target as Node)) {
                cartClose()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

    }, [divRef]) 
    return (
        <>
            <div className="relative cursor-pointer mr-6 text-gray-700" onClick={() => setCartOpen(!cartOpen)}>
                <BiShoppingBag size={40}/>
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center font-medium bg-gray-800 text-white rounded-full text-center text-sm">2</span>
            </div>

            {cartOpen && <Overlay />}

            <div className={cartClasses} ref={divRef}>
                <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
                    <button onClick={cartClose}>
                        <AiOutlineClose size={25} />
                    </button>
                </div>
                
                <div className="flex flex-col">
                    {product.slice(0, 4).map((item) => (
                        <CartItems id={item.id}
                            cover={item.cover}
                            name={item.name}
                            price={item.price}
                            quantity={1}
                            key={item.id}
                        />
                    ))}
                </div>
                <div className="absolute bottom-6 left-6 right-6 mx-auto">
                    <button className="p-5 bg-slate-800 w-full text-white text-lg rounded-xl disabled:bg-slate-700 disabled:cursor-none">
                        <span className="mr-6 md:mr-20 lg:mr-48 sm:26">Priceed To Checkout</span>
                        <label className="pl-4 border-l-2 rounded-l-sm text-lg font-extralight text-gray-400">$240</label>
                    </button>
                </div>
            </div>

        </>
    )
}