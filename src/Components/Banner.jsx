import icon from '../assets/icons/title_vector.webp'
import { LuArrowUpRight } from "react-icons/lu";
import banner from '../assets/images/banner.png'
import { Link } from 'react-router-dom';




const Banner = () => {
    return (
        <div className='bg-[#03211b] overflow-x-hidden min-h-screen'>
            <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-40 gap-10 max-w-[1620px] mx-auto">
                <div data-aos="fade-right" data-aos-duration="2000" className="flex-1">
                    <div className='flex items-center gap-4'>
                        <img src={icon} alt="" />
                        <h4 className="text-xl lg:text-2xl font-semibold text-[#fcb650]">Effortless Task Mastery</h4>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">Streamline Your Workflow with Our Intuitive <span className="text-[#fcb650]">Task Management</span> Platform</h2>
                    <p className="text-lg lg:text-xl font-semibold mb-6 text-gray-400">Welcome to TaskFlow, where simplicity meets productivity. Unlock the power of efficient task management with our user-friendly platform. Stay organized, collaborate seamlessly, and achieve your goals effortlessly. Sign up today to experience a new era of productivity.</p>
                    <div className="flex gap-4">
                        <Link to="/task/taskManagement">
                            <button className="text-[#fcb650] w-fit border border-[#fcb650] rounded-full px-6 py-3 text-xs md:text-base font-semibold hover:border-[#074c3e] hover:text-white hover:bg-[#074c3e] flex items-center gap-2">
                                Let’s Explore
                                <LuArrowUpRight className='w-6 h-6' />
                            </button>
                        </Link>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className='flex-1'>
                    <img src={banner} alt="" className='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;