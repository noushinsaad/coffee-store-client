import { Link, NavLink } from 'react-router-dom';
import navImg from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'



const NavBar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/users'>Users</NavLink></li>
    </>

    return (
        <div>
            <div className="relative">
                <img src={navImg} alt="" className="h-28 w-full" />
                <div className="flex gap-2 items-center absolute inset-[40%]">
                    <img src={logo} className="h-10" alt="" />
                    <h2 className="font-bold text-white text-2xl">Espresso Emporium</h2>
                </div>
            </div>
            <div className="navbar bg-base-100 mv-6 p-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Coffee for All</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/signin' className="btn btn-accent">Login</Link>
                </div>
            </div>
        </div>


    );
};

export default NavBar;