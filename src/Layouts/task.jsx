import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Task = () => {

    const { user } = useContext(AuthContext);

    const navOptions = <>
        <li><NavLink
            to="/task/taskManagement"
            className={({ isActive }) =>
                isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            Task Management
        </NavLink></li>
        <li><NavLink
            to="/task/post"
            className={({ isActive }) =>
                isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            Post Task
        </NavLink></li>
        <li><NavLink
            to="/task/myTask"
            className={({ isActive }) =>
                isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            My Task
        </NavLink></li>
        <br />
        <hr />
        <br />
        <li><NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/about"
            className={({ isActive }) =>
                isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            About
        </NavLink></li>
        <li><NavLink
            to="/contact"
            className={({ isActive }) =>
                isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            Contact
        </NavLink></li>
    </>




    return (
        <div className="max-w-[1620px] mx-auto px-4
        ">
            <div className="drawer my-6">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-between items-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="drawer-button flex items-center gap-2">
                        <FaBars className="text-xl cursor-pointer" /> <h5 className="text-2xl font-bold">Dashboard</h5>
                    </label>
                    <div className="mr-2">
                        {
                            user && <div className="items-center lg:flex gap-2">
                                <p className="font-bold md:mr-1 mr-2 text-[#222e48]">{user.displayName}</p>
                                <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                            </div>
                        }
                    </div>
                </div>
                <div className="drawer-side overflow-hidden z-10">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#03211b] text-base-content">
                        {/* Sidebar content here */}
                        <h4 className="text-4xl font-bold text-white mb-10 mt-4 text-center">Task<span className="text-[#fcb650]">Flow</span></h4>
                        {navOptions}

                    </ul>
                </div>
            </div>



            <div className="px-6 py-2">
                <Outlet />
            </div>
        </div>
    );
};

export default Task;