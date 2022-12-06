import frankMaherHeadshot from "../assets/photos/frank-maher-headshot.png";
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
        <nav ref={navbar} className="flex flex-row h-16 px-6 py-2 fixed top-0 right-0 left-0 bg-gray-50 z-50">
            <img src={frankMaherHeadshot} alt="Gerry Yang" className="rounded-full"></img>
            <button onClick={() => goTo(homeRef)} className="justify-start ml-2 text-xl font-bold">Gerry Yang</button>
            <div className="ml-auto flex flex-row gap-14 mr-4">
                <button className="hover:font-bold" onClick={() => goTo(homeRef)}>Home</button>
                <button className="hover:font-bold" onClick={() => goTo(timelineRef)}>About</button>
                <button className="hover:font-bold" onClick={() => goTo(contactRef)}>Contact</button>
            </div>
        </nav>
    )
}
export default Navbar;