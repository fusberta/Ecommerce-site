import { Link } from "react-router-dom";
import Camera from "../../assets/images/camera (1).png"
import { Cart } from "./cart";
import { User } from "./user";

export function Header() {
    return (
        <>
            <header className='py-5 px-5 w-full bg-white relative z-10 mx-auto shadow-lg shadow-neutral-200 transition-all duration-500 md:px-40 sm:px-12'>
                <div className='flex flex-col items-center justify-between w-full sm:flex-row'>
                    <div className='drop-shadow-lg'>
                        <Link to='/'>
                            <img src={Camera} alt='Logo' />
                        </Link>
                    </div>
                    
                    <div className='flex sm:mt-0 mt-4 sm:gap-0 gap-6'>
                        <Cart />
                        <User />
                    </div>
                </div>
            </header>
        </>
    )
}