import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;