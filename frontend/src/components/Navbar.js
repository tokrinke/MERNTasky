const Navbar = () => {
    return ( 
        <nav className="navbar flex items-center border-b border-gray-200 shadow-sm">
            <h1 className="text-center text-5xl font-extrabold text-blue-700">Tasky</h1>
            <button className=" button border-red-600 hover:bg-red-600 hover:text-white">Sign Out</button>
        </nav>
     );
}
 
export default Navbar;