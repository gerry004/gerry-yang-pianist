import {useRef} from "react";

function Navbar(props) {
    const { homeRef, timelineRef, contactRef } = props;
    const navbar = useRef();

    const goTo = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - navbar.current.offsetHeight,
            behavior: "smooth"
        });
    }
    return (
        <nav ref={navbar} id="navbar" className="flex flex-row justify-center h-16 px-6 py-2 fixed top-0 right-0 left-0 bg-white z-50">
            <button onClick={() => goTo(homeRef)} className="hidden md:block ml-2 text-xl font-bold">Gerry Yang</button>
            <div className="flex flex-row w-full justify-evenly md:w-1/3 md:ml-auto">
                <button className="font-bold text-gray-600 hover:text-black" onClick={() => goTo(timelineRef)}>My Journey</button>
                <button className="font-bold text-yellow-500 hover:bg-yellow-300 hover:text-white px-4 rounded-full border-yellow-300 border-4" onClick={() => goTo(contactRef)}>Learn Piano</button>
            </div>
        </nav>
    )
}
export default Navbar;