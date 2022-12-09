import frankMaherHeadshot from "../assets/images/frank-maher-headshot.png";
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
        <nav ref={navbar} className="flex flex-row h-16 px-6 py-2 fixed top-0 right-0 left-0 bg-white z-50">
            <img src={frankMaherHeadshot} alt="Gerry Yang" className="rounded-full"></img>
            <button onClick={() => goTo(homeRef)} className="justify-start ml-2 text-xl font-bold">Gerry Yang</button>
            <div className="ml-auto flex flex-row gap-14 mr-4">
                <button className="font-bold text-gray-600 hover:text-black" onClick={() => goTo(homeRef)}>Home</button>
                <button className="font-bold text-gray-600 hover:text-black" onClick={() => goTo(timelineRef)}>About</button>
                <button className="font-bold text-gray-600 hover:text-black" onClick={() => goTo(contactRef)}>Contact</button>
            </div>
        </nav>
    )
}
export default Navbar;