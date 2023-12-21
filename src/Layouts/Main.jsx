import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scroll from "../Components/Scroll";
AOS.init();

const Main = () => {
    return (
        <div>
            <Scroll/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;