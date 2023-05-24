import { Link } from "react-router-dom";



const Navbar = () => {



    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>


    </>


    return (
        <div>
            <div className="navbar max-w-[1150px] fixed z-10 bg-opacity-40 bg-black h-18 mb-4 px-2 md:px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {navItems}

                        </ul>
                    </div>
                    <Link to='/' className="flex items-center">
                        <img src="" className="md:w-12 w-8" alt="" /> <span className="md:text-3xl text-2xl font-bold text-white font-serif md:ml-4 ml-2">Doctalk</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white text-xl">

                        {navItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn text-white btn-info hidden md:flex">APPOINTMENT </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;