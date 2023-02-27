import Camera from "../../assets/images/camera (1).png"

export function Footer() {
    return (
        <>
            <footer className="bg-white px-20 py-12 absolute bottom-0 left-0 w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                <div className="flex justify-center items-center">
                    <img src={Camera} alt='Logo' className="w-11 mr-3"/>
                    <p className="text-md font-thin">Photo[Shop] — All right reserved — Design & Developed by Mihail Diveev</p>
                </div>
            </footer>
        </>
    )
}