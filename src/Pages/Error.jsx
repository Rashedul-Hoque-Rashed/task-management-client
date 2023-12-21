import error from '../assets/images/error.png'
import { Link } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';
import Navbar from '../Components/Navbar';
import Scroll from '../Components/Scroll';

const Error = () => {
    return (
        <div className='overflow-hidden'>
            <Scroll/>
            <Navbar/>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">404 Error Page</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; <span className="text-[#fcb650]">404 Error Page</span></p>
                    </div>
                </div>
            </div>
            <div className='px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto flex flex-col md:flex-row gap-6 items-center'>
                <div data-aos="fade-right" data-aos-duration="2000" className='flex-1'>
                <img src={error} alt="" className='w-full h-auto'/>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className='text-center flex-1'>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug text-[#222E48]">Oops! Page Not Found</h2>
                <p className='text-[#404A60] mb-6 font-medium text-lg leading-7 max-w-lg mx-auto'>The requested page couldn&lsquo;t be found. Double-check the URL or navigate back to the homepage.</p>
                <Link to='/'>
                <button className="bg-[#074c3e] w-fit text-white border border-[#074c3e] rounded-full px-6 py-3 text-xs md:text-base font-semibold hover:text-[#074c3e] hover:bg-white flex items-center gap-2 mx-auto">
                            Back To Home
                            <LuArrowUpRight className='w-6 h-6' />
                        </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;