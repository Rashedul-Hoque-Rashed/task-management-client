import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scroll from "../Components/Scroll";
import Footer from "../Components/Footer";
AOS.init();

const Main = () => {
    return (
        <div>
            <Scroll/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;