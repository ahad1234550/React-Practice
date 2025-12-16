const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Ahad's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                {/* Inline Styling Example: first {} is for dynamic JS, second {} is for object
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a> */}
            </div>
        </nav>
     );
}
 
export default Navbar;