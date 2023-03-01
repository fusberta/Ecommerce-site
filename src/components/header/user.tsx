import { useEffect, useRef, useState } from "react"
import { VscSettingsGear } from "react-icons/vsc"
import { BsBagCheck } from "react-icons/bs"
import { IoMdHelp } from "react-icons/io"
import { Link } from "react-router-dom"
import image from "../../assets/images/4140048.png"

export function User() {
    const user = true
    const [profileOpen, setProfileOpen] = useState(false)

    const close = () => {
        setProfileOpen(false)
    }

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(event.target as Node)) {
                close()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

    }, [divRef]) 

    return (
        <>
            <div className="flex justify-center items-center">
                {user ? (
                    <>
                        <button onClick={() => setProfileOpen(!profileOpen)}>
                            <img src={image} alt="Profile" className="w-10 h-10 object-cover rounded-full"/>
                        </button>

                        {profileOpen && (
                            <div className="text-black absolute top-36 right-6 w-64 bg-white p-5 rounded-md drop-shadow-xl z-20 sm:top-20 sm:right-12" ref={divRef}>
                                <div className="flex items-center mb-3 pb-4 border-b-2">
                                    <div className="mr-5">
                                        <img src={image} alt="Profile" className="w-11 h-11 object-cover rounded-full"/>
                                    </div>
                                    <div className="">
                                        <h4 className="text-md font-semibold">John Smith</h4>
                                        <label className="text-sm text-gray-700">Los Angeles, CA</label>
                                    </div>
                                </div>
                                <Link to={'/account'} className="flex items-center py-2 px-3 w-full rounded hover:bg-gray-200">
                                    <VscSettingsGear size={20}/>
                                    <h4 className="ml-5">My Account</h4>
                                </Link>
                                <Link to={'/'} className="flex items-center py-2 px-3 w-full rounded hover:bg-gray-200">
                                    <BsBagCheck size={20}/>
                                    <h4 className="ml-5">My Orders</h4>
                                </Link>
                                <Link to={'/'} className="flex items-center py-2 px-3 w-full rounded hover:bg-gray-200">
                                    <IoMdHelp size={20}/>
                                    <h4 className="ml-5">Help</h4>
                                </Link>
                            </div>
                        )}
                    </>
                ) : (
                    <Link to={{pathname: '/login'}}>My Account</Link>
                )}
            </div>
        </>
    )
}