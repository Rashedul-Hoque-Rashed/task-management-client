import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/images/logo.webp"
import { useEffect, useState } from "react";
import { LuLogIn } from "react-icons/lu";


const Navbar = () => {


    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





    const navLink = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
             isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/task"
            className={({ isActive }) =>
             isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            Task
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive }) =>
             isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            About
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive }) =>
             isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            Contact
        </NavLink>
        
    </>;





    return (
        <div className={`fixed max-w-full top-0 left-0 right-0 mx-auto z-10 overflow-hidden ${
            isScrolled ? 'bg-black' : 'bg-none'
          }`}>
            <div className='navbar  max-w-[1620px] top-0 left-0 right-0 mx-auto px-4 md:px-10 py-4 md:py-6'>
            <div data-aos="fade-right" data-aos-duration="2000" className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        <li>{navLink}</li>
                    </ul>
                </div>
                <Link>
                {/* <img src={logo} alt="" /> */}
                </Link>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000" className="navbar-center hidden lg:flex">
                <ul className=" px-1">
                    <li>{navLink}</li>
                </ul>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="navbar-end">
                <Link to='/login'>
                <button className="text-[#fcb650] w-fit border border-[#fcb650] rounded-full px-6 py-3 text-xs md:text-base font-semibold hover:border-[#074c3e] hover:text-white hover:bg-[#074c3e] flex items-center gap-2">
                Sing In
                <LuLogIn className="w-6 h-6"/>
                </button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;