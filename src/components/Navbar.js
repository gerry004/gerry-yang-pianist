import frankMaherHeadshot from "../assets/photos/frank-maher-headshot.png";
function Navbar() {
    return (
        <nav className="flex flex-row h-16 px-6 py-2">
            <img src={frankMaherHeadshot} alt="Gerry Yang" className="rounded-full"></img>
            <button className="justify-start ml-2 text-xl font-bold">Gerry Yang</button>
            <div className="ml-auto flex flex-row gap-6">
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
            </div>
        </nav>
    )
}
export default Navbar;