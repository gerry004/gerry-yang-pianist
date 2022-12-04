function Navbar() {
    return (
        <div className="flex flex-row h-12">
            <button className="justify-start">Gerry Yang Pianist</button>
            <div className="ml-auto flex flex-row gap-6">
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
            </div>
        </div>
    )
}
export default Navbar;